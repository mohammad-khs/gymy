const StagePageTitle = ({firstLine, secondLine, smallText}) => {
  return (
    <h1 className={`text-mehranaOrange text-center ${smallText ? "text-6xl" : "text-7xl"}  m-14 font-bold tracking-wider`}>
      {firstLine}<br />
      {secondLine}
    </h1>
  );
};

export default StagePageTitle;
