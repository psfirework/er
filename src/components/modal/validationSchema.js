import * as Yup from 'yup';

export const validationSchema = () => {
  return Yup.object({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Введте свое имя'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Введите свою фамилию'),
    email: Yup.string().email('Invalid email format').required('Введите адресс электронной почты'),
    passport_number: Yup.string()
      .min(11, 'Minimum 8 characters')
      .required('Введите номер паспорта'),
    phone: Yup.string()
      .min(12, 'Minimum 12 characters')
      .max(13, "If use '+' 13 characters")
      .required('Введите номер телефона'),
  });
};
