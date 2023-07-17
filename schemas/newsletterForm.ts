import { object, string } from 'yup';

export const schema = object({
  email: string().email('Please insert a valid email').required('Please insert an email'),
});
