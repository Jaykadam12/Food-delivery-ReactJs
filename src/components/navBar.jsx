import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { MyContext } from "../store/store";

function NavBar() {
  const { handleBag, setHandleBag, handleInput, bagItem } = useContext(MyContext);

  return (
    <div className="flex justify-between h-[80px] px-8 py-5">
      <div className="bg-white cursor-pointer w-10 shadow-lg flex justify-center items-center text-2xl text-green-500 rounded-sm">
        <MdFastfood />
      </div>
      <div className="flex gap-5 bg-white items-center w-[70%] px-5 h-12 rounded-sm shadow-sm">
        <div>
          <FaSearch className="text-lg text-green-500" />
        </div>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Search your dish..."
          name="dish"
          className="w-full py-2 outline-none text-gray-500"
        />
      </div>
      <div
        onClick={() => {
          handleBag ? setHandleBag(false) : setHandleBag(true);
        }}
        className="bg-white cursor-pointer w-10 shadow-lg flex justify-center items-center text-2xl text-green-500 rounded-sm relative"
      >
        <p className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center">
          {bagItem.length}
        </p>
        <FiShoppingBag />
      </div>
    </div>
  );
}
export default NavBar;
