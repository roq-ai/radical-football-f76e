import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable(),
  player_id: yup.string().nullable(),
});
