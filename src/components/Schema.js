import { z } from 'zod';

const schema = z.object({
  fname: z.string().min(1, 'Name should not be empty').max(32, 'Name must be at most 32 characters'),
  lname: z.string().min(1, 'Name should not be empty').max(32, 'Name must be at most 32 characters'),
  email: z.string().email('Invalid email address'),
});

export default schema;