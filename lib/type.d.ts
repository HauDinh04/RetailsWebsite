type ProductType = {
    id: string,
    name: string,
    description: string,
    rating: number,
    price: number,
    image: string,
    oldPrice: number,
    discount_price: number,
    in_stock: boolean,
    isNew: boolean,
    sku: string,
    images: string[]
};

type OrderType = {
    order_code: string,
    cart_id: number,
    user_id: number,
    name: string,
    phone_number: string,
    shipping_address: string,
    payment_method: number,
    shipping_unit: number,
    shipping_costs: number,
    total_order: number,
    total: number,
    status: string,
    created_at: string
}