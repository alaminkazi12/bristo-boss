import { Helmet } from "react-helmet-async";
import PopularMenue from "../PopularMenue/PopularMenue";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bristo Boss Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenue></PopularMenue>
      <Featured></Featured>
    </div>
  );
};

export default Home;
