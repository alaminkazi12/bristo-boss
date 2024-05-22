const Cover = ({ bgImg, heading, subHeading }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold"> {heading}</h1>
          <p className="mb-5 text-2xl">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
