import { useContext } from "react";
import { MyContext } from "../store/store";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

function Bag() {
  const { handleBag, bagItem, handleDeleteFood, increaseQty, decreaseQty } =
    useContext(MyContext);

  let subtotal = 0
  let DeliveryFee = 20
  bagItem.map((item)=> {
    subtotal += (item.price*item.qty)
  })
  let taxes = Math.floor(subtotal * 0.05);
  let total = subtotal + DeliveryFee + taxes

  return (
    <div
      className={`bg-white overflow-scroll w-[40%] h-[800px] fixed right-0 ${
        handleBag ? "translate-x-0" : "translate-x-full"
      } transition-all duration-300 p-12`}
    >
      <div>
        <p className="text-green-500 text-xl">Order Items</p>
      </div>

      {bagItem.map((item, index) => (
        <div key={index}>
          <div className="w-full h-[120px] mt-5 bg-white shadow-lg rounded-lg p-2 flex">
            <img
              className="h-[100%] w-[40%] object-cover rounded-lg"
              src={item.image}
              alt=""
            />
            <div className="w-[60%] ml-4 my-2 flex justify-between">
              <div className="w-[45%] text-center">
                <p className="text-medium font-medium text-gray-600">
                  {item.name}
                </p>
                <div className="flex border-2 justify-between border-green-500 rounded-lg h-12 mt-2 overflow-hidden">
                  <button
                    onClick={() =>
                      item.qty > 1 ? decreaseQty(item) : null
                    }
                    className="w-[33%] bg-white text-2xl cursor-pointer"
                  >
                    -
                  </button>
                  <p className="w-[33%] bg-gray-300 flex items-center justify-center text-xl">
                    {item.qty}
                  </p>
                  <button
                    onClick={() => increaseQty(item)}
                    className="w-[33%]  bg-white text-2xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-xl text-green-600">Rs {item.price}/-</p>
                <button
                  onClick={() => {
                    handleDeleteFood(item.id);
                  }}
                  className="text-red-400 cursor-pointer flex justify-end w-full mt-3 text-4xl"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr className="mt-8 font-bold text-gray-500" />
      {bagItem.length > 0 ? (
        <>
          {" "}
          <div className="px-5 py-8">
            <div className="flex justify-between text-xl ">
              <span className="text-gray-600 font-bold">Subtotal</span>
              <span className="text-green-600 text-2xl w-[120px] text-end">
                Rs {subtotal}/-
              </span>
            </div>
            <div className="flex justify-between text-xl">
              <span className="text-gray-600 font-bold">Taxes</span>
              <span className="text-green-600 text-2xl">Rs {taxes}/-</span>
            </div>
            <div className="flex justify-between text-xl">
              <span className="text-gray-600 font-bold">Delivery Fee</span>
              <span className="text-green-600 text-2xl">
                Rs {DeliveryFee}/-
              </span>
            </div>
          </div>
          <hr className=" font-bold text-gray-500" />
          <div className="px-8 pt-5">
            <div className="flex justify-between text-xl">
              <span className="text-gray-600 font-bold">Total</span>
              <span className="text-green-600 text-2xl">Rs {total}/-</span>
            </div>
            <div className="text-center py-4">
              <button onClick={() => toast.success('Order Place')} className="py-2 px-20 rounded-lg cursor-pointer text-xl bg-green-400">
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-2xl mt-5">Bag is empty</div>
      )}
    </div>
  );
}
export default Bag;
