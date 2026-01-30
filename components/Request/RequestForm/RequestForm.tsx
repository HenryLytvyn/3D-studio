// RequestForm.tsx

'use client';

import { ErrorMessage, Form, Formik } from 'formik';
import css from './RequestForm.module.css';
import { useId, useState } from 'react';
import FormField from '@/components/FormField/FormField';
import Button from '@/components/Button/Button';
import FilesList from './FilesList/FilesList';
import RequestFormIcon from './RequestFormIcon';
import { getFileKind } from '@/lib/utils/getFileKind';
import RequestFormSchemaValidate from '@/lib/validation/RequestForm/RequestFormSchemaValidate';
import CheckMark from '../CheckMark/CheckMark';

interface Request {
  name: string;
  contact: string;
  message: string;
  filesUrl: File[];
}

const initialValues: Request = {
  name: '',
  contact: '',
  message: '',
  filesUrl: [],
};

const MAX_FILES = 4;
// let isFormSubmitted = true;
let isFormSubmitted;

export default function RequestForm() {
  const fieldId = useId();
  const [isUploadDisabled, setIsUploadDisabled] = useState<boolean>(false);

  return (
    <>
      {!isFormSubmitted && (
        <Formik<Request>
          initialValues={initialValues}
          validationSchema={RequestFormSchemaValidate}
          validateOnMount
          onSubmit={() => {}}
        >
          {formik => (
            <Form className={css.form}>
              <ul className={css.fieldsList}>
                <li className={css.fieldItem}>
                  <FormField
                    label="Имя"
                    placeholder="Ваше имя"
                    name="name"
                    type="text"
                    isRequired={true}
                  />
                </li>

                <li className={css.fieldItem}>
                  <FormField
                    label="Email или телефон"
                    placeholder="Контакт"
                    name="contact"
                    type="text"
                    isRequired={true}
                  />
                </li>

                <li className={css.fieldItem}>
                  <FormField
                    label="Сообщение"
                    placeholder="Расскажите о вашем проекте"
                    name="message"
                    type="text"
                    as="textarea"
                    isRequired={true}
                  />
                </li>

                <li className={css.fieldItem}>
                  <input
                    id={`${fieldId}-addFiles`}
                    type="file"
                    accept="image/png,image/jpg,image/jpeg,image/webp,.stl,.obj,.gltf,.glb"
                    name="filesUrl"
                    multiple
                    className={css.addFilesInput}
                    onChange={e => {
                      if (!e.target.files || e.target.files.length === 0)
                        return;
                      const selectedFiles = Array.from(e.target.files);
                      const existingFiles = formik.values.filesUrl;

                      function isSameFile(a: File, b: File) {
                        return a.name === b.name && a.size === b.size;
                      }

                      const validFiles = selectedFiles.filter(file => {
                        const isValid = getFileKind(file);
                        if (!isValid) {
                          alert(
                            `Файл "${file.name}" имеет неподдерживаемый формат`
                          );
                        }
                        return isValid;
                      });

                      if (validFiles.length === 0) {
                        e.target.value = '';
                        return;
                      }

                      const allFiles = [
                        ...existingFiles.filter(
                          oldFile =>
                            !validFiles.some(newFile =>
                              isSameFile(oldFile, newFile)
                            )
                        ),
                        ...validFiles,
                      ].slice(0, MAX_FILES);

                      formik.setFieldValue('filesUrl', allFiles);

                      setIsUploadDisabled(allFiles.length >= MAX_FILES);

                      // setPreview(URL.createObjectURL(allFiles));

                      // важно: сбрасываем input, чтобы можно было выбрать те же файлы снова
                      // e.target.value = '';
                    }}
                  />

                  {formik.values.filesUrl.length > 0 && (
                    <FilesList
                      filesArray={formik.values.filesUrl}
                      // filesQuentity={uploadFilesQuentity}

                      removeFile={updatedFiles => {
                        formik.setFieldValue('filesUrl', updatedFiles);
                        if (updatedFiles.length <= MAX_FILES)
                          setIsUploadDisabled(false);
                      }}
                    />
                  )}

                  {/* Upload BUTTON */}

                  {!isUploadDisabled && (
                    <>
                      <label
                        htmlFor={`${fieldId}-addFiles`}
                        className={css.addFilesBtn}
                      >
                        <span className={css.addFilesBtnText}>
                          Загрузить файлы
                        </span>
                        <RequestFormIcon />
                      </label>

                      <p className={css.addFilesDescription}>
                        Вы можете добавить до четырех файлов (это не
                        обязательно): .png, jpeg, webp, .stl, .obj, .gltf, .glb.
                      </p>
                      <p className={css.addFilesDescription}>
                        Размер изображений - до 5Мб.
                      </p>
                      <p
                        className={`${css.addFilesDescription} ${css.lastChild}`}
                      >
                        Размер файлов моделей - до 20Мб.
                      </p>
                    </>
                  )}

                  <ErrorMessage
                    component="span"
                    name="filesUrl"
                    className={css.errorMessage}
                  />
                </li>
              </ul>
              <Button
                value="Отправить заявку"
                variant="submit"
                type="submit"
                width="100%"
                isDisabled={!formik.isValid}
              />
            </Form>
          )}
        </Formik>
      )}

      {isFormSubmitted && (
        <>
          <CheckMark />
          <p className={css.successText}>
            Ваша заявка отправлена! Скоро мы с вами свяжемся.
          </p>
        </>
      )}
    </>
  );
}
