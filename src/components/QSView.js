import React from "react";
import Button from "react-uwp/Button";
import { Link } from "react-router-dom";

const QSView = ({ q, id }) => {
  return (
    <div className="row">
      <h5>Would you Rather ...?!</h5>
      <div className="col">
        <Button>{q.optionOne.text}</Button>
      </div>
      <div className="col">
        <Button>{q.optionTwo.text}</Button>
      </div>
      <div className="col">
        <Button
          className="text-center "
          style={{ position: "fixed", bottom: 10, right: 10 }}
        >
          <Link className="btn m-0 p-0 text-info" to={`/questions/${id}`} exact>
            Open vote
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QSView;
