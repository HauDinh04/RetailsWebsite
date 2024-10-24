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
const RemoveCart = ({product}:{product:Product}) => {
    const RemoveCart =()=>{
        alert(`${product.name} đã xóa khỏi giỏ hàng`);
    }
  return (
   <div className="mt-2">
    <Button onClick={RemoveCart} className="px-[6px] py-3 text-white items-center bg-red-600 w-full rounded-none">Remove Cart</Button>
   </div>
  )
}

export default RemoveCart;