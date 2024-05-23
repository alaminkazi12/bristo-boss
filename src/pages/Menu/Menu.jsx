import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import soupbg from "../../assets/menu/soup-bg.jpg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import saladbg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Our Menu | Bristo Boss Restaurant</title>
      </Helmet>

      {/* main cover */}

      <Cover
        bgImg={bgImg}
        heading={"OUR MENUE"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>

      {/* offered */}

      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>

      {/* dessert items  */}

      <MenuCategory
        items={dessert}
        title={"DESSERTS"}
        coverImg={dessertimg}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* pizza  */}

      <MenuCategory
        items={pizza}
        title={"PIZZA"}
        coverImg={pizzabg}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* salad  */}

      <MenuCategory
        items={salad}
        title={"SALADS"}
        coverImg={saladbg}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* soup */}
      <MenuCategory
        items={soup}
        title={"SOUPS"}
        coverImg={soupbg}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
