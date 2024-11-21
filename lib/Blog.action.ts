export const fetchBlogPosts = async (page: number = 1) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/post?page=${page}`, {
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

export const fetchBlogPostByID = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/post/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });

    if (!res.ok) {
      console.log(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error('Error fetching blog detail...', e);
    return null;
  }
};
