import React, { useState } from "react";
import { connect } from "react-redux";
import { Separator } from "react-uwp";
import Button from "react-uwp/Button";
import TextBox from "react-uwp/TextBox";
import { handleAddQuestion } from "../actions/questions";
import { ListView } from "react-uwp/ListView";

const NewQS = ({ authedUser, dispatch }) => {
  const [pollOne, setPollOne] = useState("");
  const [pollTwo, setPollTwo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pollTwo, pollOne, authedUser);
    dispatch(handleAddQuestion(pollOne, pollTwo, authedUser));
    setPollOne("");
    setPollTwo("");
  };
  return (
    <div className="row">
      <ListView
        listItemStyle={{
          display: "flex",
          justifyContent: "flex-start",
          border: "none",
          margin: 0,
          padding: 12,
          maxWidth: 700,
          minWidth: 250,
          marginTop: -10,
          height: 250,
          marginBottom: -10,
        }}
        listSource={[
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <label className="mb-2" htmlFor="PollOne">
                First Poll:{" "}
              </label>
              <TextBox
                onChange={(e) => setPollOne(e.target.value)}
                value={pollOne}
                type="text"
                name="pollOne"
                id="pollOne"
              />
              <label className="mt-2 mb-1" htmlFor="PollTwo">
                Second:
              </label>
              <TextBox
                onChange={(e) => setPollTwo(e.target.value)}
                value={pollTwo}
                type="text"
                name="pollTwo"
                id="pollTwo"
              />
              <Button
                className="my-3"
                typeof="submit"
                style={{ width: "100%" }}
              >
                Add QS
              </Button>
            </form>
          </div>,
        ]}
      />
      <div className="col-md-1"></div>
      {(pollOne.length > 0 || pollTwo.length > 0) && (
        <ListView
          listItemStyle={{
            display: "flex",
            justifyContent: "flex-start",
            border: "none",
            margin: 0,
            maxWidth: 700,
            minWidth: 250,
            marginTop: -10,
            marginBottom: -10,
          }}
          listSource={[
            <div className="col-md-5">
              <Separator />
              <p className="fs-3">Would You Rather </p>
              <Button className="fs-4">{pollOne} </Button>
              {pollTwo.length > 0 && (
                <>
                  <p className="my-2 fs-5">Or</p>
                  <Button className="fs-4">{pollTwo}</Button>
                </>
              )}
            </div>,
          ]}
        />
      )}
    </div>
  );
};
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewQS);
