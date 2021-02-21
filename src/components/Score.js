import React from "react";

const Score = ({ asked, answered, total }) => {
  return (
    <table className="table text-light table-bordered border-info mt-4 fs-6 text-center">
      <thead>
        <tr>
          <th>Total Score</th>
          <th>Questions Asked</th>
          <th>Questions Answered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{total}</td>
          <td>{asked}</td>
          <td>{answered}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Score;
