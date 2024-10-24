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
