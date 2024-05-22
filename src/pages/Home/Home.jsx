import PopularMenue from "../PopularMenue/PopularMenue";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenue></PopularMenue>
      <Featured></Featured>
    </div>
  );
};

export default Home;
