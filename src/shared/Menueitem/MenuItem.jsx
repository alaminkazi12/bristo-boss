const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] h-[104px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-2xl">{name} -------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-xl text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
