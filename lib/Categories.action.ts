export const fetchOrders = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/order?page=1`);
        return res.json();
    } catch (e) {
        console.error('Error fetching orders...', e);
    }
}

