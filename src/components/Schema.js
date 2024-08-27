import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name should not be empty').max(32, 'Name must be at most 32 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password should be at least 6 characters'),
});

export default schema;