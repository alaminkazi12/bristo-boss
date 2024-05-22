import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../shared/Menueitem/MenuItem";

const PopularMenue = () => {
  const [menue, setMenue] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenue(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menue.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenue;
