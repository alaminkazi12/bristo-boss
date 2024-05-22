import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed">
      <div className="mt-10 py-20 px-36  bg-black bg-opacity-70">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-20">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="text-white space-y-2">
            <p className="text-lg">March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-white">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
