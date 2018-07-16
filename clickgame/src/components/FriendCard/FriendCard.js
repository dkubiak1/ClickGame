import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" key={props.id} id={props.id} onClick={() => props.handleClick(props.id)} value={props.id}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>    
  </div>
  
);

export default FriendCard;
