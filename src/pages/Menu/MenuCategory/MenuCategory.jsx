import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/Menueitem/MenuItem";

const MenuCategory = ({ items, title, coverImg, subHeading }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover bgImg={coverImg} heading={title} subHeading={subHeading}></Cover>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
