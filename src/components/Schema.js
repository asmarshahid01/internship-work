import { z } from 'zod';

const schema = z.object({
  fname: z.string().min(1, 'First name should not be empty').max(32, 'First name must be at most 32 characters'),
  lname: z.string().min(1, 'Last name should not be empty').max(32, 'Last name must be at most 32 characters'),
  email: z.string().email('Invalid email address')
});

export default schema;