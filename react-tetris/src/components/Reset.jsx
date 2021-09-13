import React from "react";
const Reset = ({ onResetClicked }) => {
  return (
    <button
      style={{
        backgroundColor: "white",
        fontSize: "2rem",
        borderRadius: "2%",
        marginLeft: "3.4rem",
      }}
      onClick={onResetClicked}
    >
      Reset
    </button>
  );
};

export default Reset;
