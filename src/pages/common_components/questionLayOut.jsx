const QuestionLayOut = ({ questionText }) => {
  return (
    <>
      <div className={`text-4xl text-center p-10 mb-16 font-bold tracking-wider text-mehranaDarkBlue`}>
        {questionText}
      </div>
    </>
  );
};

export default QuestionLayOut;
