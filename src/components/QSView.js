import React from "react";
import Button from "react-uwp/Button";
import { Link } from "react-router-dom";

const QSView = ({ q, id }) => {
  return (
    <>
      <h5>Would you Rather ...?!</h5>
      <div className="col-12 col-md-4 py-2 py-md-0">
        <Button>{q.optionOne.text}</Button>
      </div>
      <div className="col-12 col-md-4 py-2 py-md-0">
        <Button>{q.optionTwo.text}</Button>
      </div>
      <div className="col-12 col-md-4 py-2 py-md-0">
        <Button
          className="text-center"
          // style={{ position: "absolute ", bottom: 10, right: 10 }}
        >
          <Link className="btn m-0 p-0 text-info" to={`/questions/${id}`}>
            Open vote
          </Link>
        </Button>
      </div>
    </>
  );
};

export default QSView;
