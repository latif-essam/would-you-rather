import React, { useState } from "react";

import Button from "react-uwp/Button";

const QSDetailsVote = ({ question: q, saveQsAns }) => {
  const [currentVote, setCurrentVote] = useState("");

  const handleChange = (e) => {
    const selectedVote = e.currentTarget.value;
    setCurrentVote(selectedVote);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveQsAns(currentVote);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="row">
        <h5>Would you Rather ...?!</h5>
        <div className="col-md-5">
          <p className="fs-6 fw-light">{q.optionOne.text}</p>
          <input
            className="form-check-input mx-4"
            type="radio"
            id="optionOne"
            value="optionOne"
            onChange={handleChange}
            name="answer"
            checked={currentVote === "optionOne" ? true : false}
          />
        </div>
        <div className="col-md-5">
          <p className="fs-6 fw-light">{q.optionTwo.text}</p>
          <input
            className="form-check-input mx-4"
            type="radio"
            id="optionTwo"
            value="optionTwo"
            name="answer"
            onChange={handleChange}
            checked={currentVote === "optionTwo" ? true : false}
          ></input>
        </div>
        <div className="col-md-2">
          <Button typeof="submit" disabled={currentVote === ""}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default QSDetailsVote;
