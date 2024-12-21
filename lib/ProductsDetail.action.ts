
export const fetchProductDetail = async (id: number) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/client/product/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
                },
                method: "GET",
            }
        );
        // console.log(res);
        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching product detail...", error);
        return null;
    }
};

export const fetchRelatedProducts = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL_JSON}/products/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
                },
                method: "GET",
            }
        );
        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching Related Products...", error);
        return null;
    }
};

export const fetchLatestProduct = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL_JSON}/products/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
                },
                method: "GET",
            }
        );
        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching Related Products...", error);
        return null;
    }
};
