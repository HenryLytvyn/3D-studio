// RequestForm.tsx

'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RequestForm.module.css';
import { useEffect, useId, useState } from 'react';
import FormField from '@/components/FormField/FormField';
import Button from '@/components/Button/Button';
import FilesList from './FilesList/FilesList';
import RequestFormIcon from './RequestFormIcon';

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

//! ============================

const ALLOWED_IMAGE_TYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/webp',
];

const ALLOWED_3D_EXTENSIONS = ['stl', 'obj', 'gltf', 'glb'];

const MAX_FILES = 4;

function isAllowedFile(file: File) {
  const extension = file.name.split('.').pop()?.toLowerCase();

  const isImage = ALLOWED_IMAGE_TYPES.includes(file.type);
  const is3D = extension ? ALLOWED_3D_EXTENSIONS.includes(extension) : false;

  console.log('isImage: ', isImage);
  console.log('is3D: ', is3D);

  return isImage || is3D;
}

export default function RequestForm() {
  // const uploadFilesQuentity = 4;
  const fieldId = useId();
  const [isUploadDisabled, setIsUploadDisabled] = useState<boolean>(false);

  console.log(isUploadDisabled);

  // useEffect(() => {
  //   return () => {
  //     previews.forEach(url => URL.revokeObjectURL(url));
  //   };
  // }, [previews]);

  // function removeFile(updatedFiles: File[]) {
  //   formik.setFieldValue('filesUrl', updatedFiles);
  //   if (updatedFiles.length <= uploadFilesQuentity) setIsUploadDisabled(false);
  // }

  return (
    <Formik<Request> initialValues={initialValues} onSubmit={() => {}}>
      {formik => (
        <Form className={css.form}>
          <ul className={css.fieldsList}>
            <li className={css.fieldItem}>
              <FormField
                label="Имя"
                placeholder="Ваше имя"
                name="name"
                type="text"
              />
            </li>

            <li className={css.fieldItem}>
              <FormField
                label="Email или телефон"
                placeholder="Контакт"
                name="contact"
                type="text"
              />
            </li>

            <li className={css.fieldItem}>
              <FormField
                label="Сообщение"
                placeholder="Расскажите о вашем проекте"
                name="message"
                type="text"
                as="textarea"
              />
            </li>

            <li className={css.fieldItem}>
              <input
                id={`${fieldId}-addFiles`}
                type="file"
                accept="
                  image/png,
                  image/jpg,
                  image/jpeg,
                  image/webp,
                  .stl,
                  .obj,
                  .gltf,
                  .glb
                  "
                name="filesUrl"
                multiple
                className={css.addFilesInput}
                onChange={e => {
                  if (!e.target.files || e.target.files.length === 0) return;
                  const selectedFiles = Array.from(e.target.files);
                  const existingFiles = formik.values.filesUrl;

                  function isSameFile(a: File, b: File) {
                    return a.name === b.name && a.size === b.size;
                  }

                  const validFiles = selectedFiles.filter(file => {
                    const isValid = isAllowedFile(file);
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

              {/* {formik.values.filesUrl.length > 0 && (
                <ul className={css.filesList}>
                  {formik.values.filesUrl.map((file, index) => (
                    <li key={`${file.name}-${index}`} className={css.fileItem}>
                      <img
                        className={css.uploadImage}
                        src={`${URL.createObjectURL(file)}`}
                      />

                      <button
                        type="button"
                        className={css.removeFileBtn}
                        onClick={() => {
                          const updatedFiles = formik.values.filesUrl.filter(
                            (_, i) => i !== index
                          );
                          formik.setFieldValue('filesUrl', updatedFiles);
                          if (
                            formik.values.filesUrl.length <= uploadFilesQuentity
                          )
                            setIsUploadDisabled(false);
                        }}
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              )} */}

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

              {!isUploadDisabled && (
                <label
                  htmlFor={`${fieldId}-addFiles`}
                  className={css.addFilesBtn}
                >
                  <span className={css.addFilesBtnText}>Загрузить файлы</span>
                  <RequestFormIcon />
                </label>
              )}

              <ErrorMessage
                component="span"
                name="filesUrl"
                // className={`${css.errorMessage} ${css.errorMessageImage}`}
              />
            </li>
          </ul>
          <Button
            value="Отправить заявку"
            variant="submit"
            type="submit"
            width="100%"
          />

          <pre>{formik.values.filesUrl.map(f => f.name).join('\n')}</pre>
        </Form>
      )}
    </Formik>
  );
}
