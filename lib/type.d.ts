interface ProductType {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  oldPrice: number;
  discount_price: number;
  in_stock: boolean;
  isNew: boolean;
  sku: string;
  images: string[];
  short_description: string
  thumbnail: {
    path: string
  }
};

interface Products extends ProductType {
  code: string,
  slug: string,
  type: string,
  short_description: string,
  thumbnail: null,
  width: number,
  length: number,
  height: number,
}

type OrderType = {
  order_code: string;
  cart_id: number;
  user_id: number;
  name: string;
  phone_number: string;
  shipping_address: string;
  payment_method: number;
  shipping_unit: number;
  shipping_costs: number;
  total_order: number;
  total: number;
  status: string;
  created_at: string;
};

type CartType = {
  id: string;
  user_id: string;
  total: number;
  items: [
    {
      id: string;
      name: string;
      description: string;
      rating: number;
      price: number;
      image: string;
      oldPrice: number;
      discount_price: number;
      in_stock: boolean;
      isNew: boolean;
      sku: string;
    }
  ];
};

type UserType = {
  id: string;
  code: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  description: string;
  is_active: boolean;
  deleted: boolean;
};

type BannerType = {
  id: string;
  image: string;
  text: string;
};

type CategoryType = {
  id: string;
  name: string;
  subCategories?: {
    id: string;
    name: string;
  }[];
};

type PostType = {
  id: string;
  slug: string;
  thumbnail_url: string;
  title: string;
  description: string;
  comment_count: number;
  datetime: string;
};

type Post = {
  id: number;
  company_id: number;
  store_id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  content: string;
  author: string;
  tags: string;
  views: number;
  lang: string;
  created_at: string;
  updated_at: string;
};

type Pagination = {
  total: number;
  current_page: number;
  per_page: number;
};

interface Banner {
  background_color : string
  code: string;
  created_at: string;
  description: string
  id: number
  is_active: boolean
  title: string
  updated_at: string
}