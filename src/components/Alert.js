import React from "react";
const Alert = ({ type = "danger", children }) => {
  const cases = {
    danger: {
      title: "Error",
      text: "Error 404, there is no Route called like that 🤷‍♂️",
      alert: "danger",
    },
    warning: {
      title: "Zero Answers",
      text: "All Questions got Answered, Try to add new Question! 😊",
      alert: "warning",
    },
    info: {
      title: "Zero Questions",
      text: "There is no Questions to show, Try to answer some Question! ✌",
      alert: "info",
    },
    main: {
      alert: "info",
    },
  };
  const currentAlert = cases[type];
  return (
    <div className={`alert alert-${currentAlert.alert}`} role="alert">
      {currentAlert !== "main" && (
        <>
          <p className="fs-4">{currentAlert.title}</p>
          <p className="fs-5">{currentAlert.text}</p>
        </>
      )}
      {children}
    </div>
  );
};

export default Alert;
