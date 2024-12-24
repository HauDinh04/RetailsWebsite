'use server';

import { CommentBodyType } from '@/schemaValidations/comment.schema';

// JSON SERVER
// export const fetchCommentsByPostID = async (postId: string) => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_JSON}/comments?postId=${postId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     return {
//       data: [],
//       meta: {
//         pagination: {
//           total: 0,
//           current_page: 1,
//           per_page: 10
//         }
//       }
//     };
//   }
// };

export const fetchCommentsByPostID = async (postId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/post/${postId}/comment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      data: [],
      meta: {
        pagination: {
          total: 0,
          current_page: 1,
          per_page: 10
        }
      }
    };
  }
};

export const createComment = async (postId: string, data: CommentBodyType) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_JSON}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.error('Error creating comment:', error);
    return { error: 'Failed to create comment. Please try again.' };
  }
};
