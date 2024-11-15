export const fetchCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/category`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f'
            },
            method: "GET"
        });

        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (e) {
        console.error('Error fetching orders...', e);
        return null;
    }
}

export const fetchProductByPage = async (page: number = 1, limit: number) => {
    try {
        const offset = (page - 1) * limit;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_JSON}/products?_start=${offset}&_limit=${limit}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f'
            },
            method: "GET"
        });

        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (e) {
        console.error('Error fetching orders...', e);
        return null;
    }
}

export const fetchProductByIdCategoriesAndPage = async (idCategory: number, page: number) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?id_category=${idCategory}&page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f'
            },
            method: "GET"
        });

        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (e) {
        console.error('Error fetching orders...', e);
        return null;
    }
}