import { ALLOWED_3D_EXTENSIONS, ALLOWED_IMAGE_TYPES } from '@/lib/constants';
import * as Yup from 'yup';

const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10,14}$/;

const getExtension = (file: File): string | null => {
  const parts = file.name.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : null;
};

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_MODEL_SIZE = 20 * 1024 * 1024; // 20MB

const RequestFormSchemaValidate = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Имя должно содержать минимум 3 символа')
    .max(40, 'Введите только первое имя')
    .required('Пожалуйста, введите ваше имя'),

  contact: Yup.string()
    .required('Введите email или телефон')
    .test(
      'email-or-phone',
      'Введите корректный email или номер телефона',
      value => {
        if (!value) return false;

        const isEmail = Yup.string().email().isValidSync(value);
        const isPhone = phoneRegex.test(value);

        return isEmail || isPhone;
      }
    ),

  message: Yup.string()
    .min(10, 'Сообщение должно включать минимум 10 символов')
    .max(600, 'Ваши сообщение превышает лимит в 600 символов')
    .required(
      'Опишите вкратце, ваш запрос (количество принтов, сроки, размеры и т.д.)'
    ),

  filesUrl: Yup.array()
    .nullable()
    .default([])
    .max(4, 'Можно загрузить не более 4 файлов')
    .of(
      Yup.mixed<File>()
        .required()
        .test('file-format', 'Недопустимый формат файла', file => {
          if (!(file instanceof File)) return false;

          const ext = getExtension(file);
          if (!ext) return false;

          return [...ALLOWED_IMAGE_TYPES, ...ALLOWED_3D_EXTENSIONS].includes(
            ext
          );
        })
        .test('file-size', 'Файл превышает допустимый размер', file => {
          if (!(file instanceof File)) return false;

          const ext = getExtension(file);
          if (!ext) return false;

          if (ALLOWED_IMAGE_TYPES.includes(ext)) {
            return file.size <= MAX_IMAGE_SIZE;
          }

          if (ALLOWED_3D_EXTENSIONS.includes(ext)) {
            return file.size <= MAX_MODEL_SIZE;
          }

          return false;
        })
    ),
});

export default RequestFormSchemaValidate;
