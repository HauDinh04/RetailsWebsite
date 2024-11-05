type CollectionType = {
    _id: string;
    title: string;
    description: string;
    image: string;
    products: ProductType[];
  };
  
type ProductType = {
    _id: string;
    title: string;
    description: string;
    media: [string];
    category: string;
    collections: [CollectionType];
    tags: [string];
    price: number;
    sale:number; 
    discount:number;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
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