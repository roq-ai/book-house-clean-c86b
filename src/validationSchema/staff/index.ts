import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone_number: yup.string().required(),
  hire_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
