import { useContext } from "react";
import image1 from "../assets/image1.avif";
import { MyContext } from "../store/store";
import { toast } from "react-toastify";

function Card() {
  const { cate, handleBagItems } = useContext(MyContext);
  return (
    cate.length>0? <div className="flex flex-wrap gap-5 ml-20 mt-5 h-[800px]">
      {cate.map((item) => (
        <div
          key={item.id}
          className="w-[320px] h-[400px] cursor-pointer bg-white rounded-lg shadow-lg p-3 hover:border-2 border-green-400"
        >
          <div>
            <img
              className="rounded-lg h-[250px] w-full object-cover"
              src={item.food_image}
              alt=""
            />
          </div>
          <div className="mt-2 capitalize text-xl font-bold">
            {item.food_name}
          </div>
          <div className="flex justify-between mt-2 text-green-800 text-xl">
            <p>Rs {item.price}</p>
            <p className="mr-4">{item.food_type}</p>
          </div>
          <div>
            <button
              className="cursor-pointer w-full bg-green-400 h-10 mt-3 mb-2 rounded-lg text-black hover:bg-green-300"
              onClick={() => {handleBagItems(item);toast.success("Item added")}}
              
            >
              Add to Dish
            </button>
          </div>
        </div>
      ))}
    </div>:<div className="text-center text-2xl h-[800px] mt-12 capitalize">No dish found</div>
  );
}
export default Card;
