import { Button } from "../ui/button"
interface Product {
    name: string;
    image: string;
    price: number;
    model: string;
    brand: string;
    availability: string;
    rating: string;
    summary: string;
    weight: string;
    dimensions: string;
    speed: string;
    memory?: string; 
  }
const AddToCart = ({product}:{product:Product}) => {
    const handleAddToCart =()=>{
        alert(`${product.name} đã them vào giỏ hàng`);
    }
  return (
   <div className="">
    <Button onClick={handleAddToCart} className="px-[6px] py-3 text-white items-center bg-[#337AB7] w-full rounded-none">Add To Cart</Button>
   </div>
  )
}

export default AddToCart;