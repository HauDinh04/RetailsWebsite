import z from 'zod';

export const CommentBody = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email('Email must be valid.'),
  telephone: z.string().min(6, {
    message: 'Telephone must be at least 6 characters.'
  }),
  comment: z.string().min(10, {
    message: 'Comment must be at least 10 characters.'
  }),
  postId: z.string(),
  createdAt: z.string()
});

export type CommentBodyType = z.TypeOf<typeof CommentBody>;
