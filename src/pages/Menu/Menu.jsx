import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bristo Boss Restaurant</title>
      </Helmet>

      <Cover
        bgImg={bgImg}
        heading={"OUR MENUE"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
    </div>
  );
};

export default Menu;
