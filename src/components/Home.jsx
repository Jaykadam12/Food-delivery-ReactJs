import Bag from "./bag";
import Card from "./card";
import Categories from "./categories";
import NavBar from "./navBar";

function Home() {
  return (
    <div className="bg-slate-200">
      <Bag />
      <NavBar />
      <Categories />
      <Card />
    </div>
  );
}
export default Home;