const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" space-y-4 mb-12">
      <p className="text-xl text-yellow-500 text-center italic">
        ---{subHeading}---
      </p>
      <hr className="border-b-4 max-w-[40%] mx-auto" />
      <h3 className="text-[40px] text-center">{heading}</h3>
      <hr className="border-b-4 max-w-[40%] mx-auto" />
    </div>
  );
};

export default SectionTitle;
