import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable(),
  academy_id: yup.string().nullable(),
});
