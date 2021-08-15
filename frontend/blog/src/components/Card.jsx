import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="row AGrow">
        <div className="col AGcol">
        <Detail detailInfo={props.name} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.school} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.std} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.age} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.dob} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.mobileno} />
        </div>
        
    </div>
  );
}

export default Card;
