import React from "react";
import Paragraph from "./Paragraph";

const ParagraphOutput = (props) => {
  console.log("ParagraphOutput Component");
  return <Paragraph>{props.isShown ? "New Paragraph" : ""} </Paragraph>;
};

export default React.memo(ParagraphOutput);
