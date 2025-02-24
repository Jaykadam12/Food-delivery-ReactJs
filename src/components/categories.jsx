import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { useContext } from "react";
import { MyContext } from "../store/store";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "All",
      icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 2,
      name: "breakfast",
      icon: (
        <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
      ),
    },
    {
      id: 3,
      name: "soups",
      icon: <TbSoup className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 4,
      name: "pasta",
      icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 5,
      name: "main_course",
      icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 6,
      name: "pizza",
      icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 7,
      name: "burger",
      icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
    },
  ];
  const {handleCategories} = useContext(MyContext)
  
  return (
    <div className="flex mt-5 justify-center gap-5">
      {categories.map((item) => (
        <div
          className="bg-white cursor-pointer rounded-sm shadow-lg w-[100px] h-[120px] mb-5 p-3"
          key={item.id}
          onClick={() => handleCategories(item)}
        >
          <div>{item.icon}</div>
          <div className="mt-3 text-sm font-bold">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
export default Categories;
