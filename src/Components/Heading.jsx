const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl text-[#F36B22] font-bold">{title}</h2>
      <p className="mt-6 w-2/3 mx-auto text-xl text-[#929292]">{description}</p>
    </div>
  );
};

export default Heading;
