const QuestionLayOut = ({ questionText, questionFootNote }) => {
  return (
    <>
      <div
        className={`text-4xl text-center py-10 md:py-5 md:mb-8 mb-16 font-bold tracking-wider text-mehranaDarkBlue`}
      >
        {questionText}

        {questionFootNote ? (
          <div className="text-mehranaDarkGray text-lg my-8 text-center">
            {questionFootNote}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default QuestionLayOut;
