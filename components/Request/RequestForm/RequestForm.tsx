// RequestForm.tsx

'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RequestForm.module.css';
import { useEffect, useId, useState } from 'react';
import FormField from '@/components/FormField/FormField';
import Button from '@/components/Button/Button';
import FilesList from './FilesList/FilesList';

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

export default function RequestForm() {
  const uploadFilesQuentity = 4;
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
                accept="image/*"
                name="filesUrl"
                multiple
                className={css.addFilesInput}
                onChange={e => {
                  if (!e.target.files || e.target.files.length === 0) return;
                  const newFiles = Array.from(e.target.files);
                  const existingFiles = formik.values.filesUrl;
                  const allFiles = [...existingFiles, ...newFiles];

                  if (allFiles.length > 4) {
                    setIsUploadDisabled(true);
                    return;
                  }
                  formik.setFieldValue('filesUrl', allFiles);

                  if (allFiles.length >= uploadFilesQuentity) {
                    setIsUploadDisabled(true);
                    // return;
                  }
                  // setPreview(URL.createObjectURL(allFiles));

                  // важно: сбрасываем input, чтобы можно было выбрать те же файлы снова
                  e.target.value = '';
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
                    if (updatedFiles.length <= uploadFilesQuentity)
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

                  <svg
                    className={css.addFilesBtnIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" />
                    <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" />
                  </svg>
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
