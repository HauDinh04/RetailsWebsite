export const fetchCommentsByPostID = async (postId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/post/${postId}/comment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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
