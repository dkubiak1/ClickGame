import React from "react";
import "./Title.css";

const Title = props => <div className="row"><h1 className="title">{props.message}</h1>
<h3>Score: {props.score}</h3>
<h3>High Score: {props.highScore}</h3>
</div>;

export default Title;
