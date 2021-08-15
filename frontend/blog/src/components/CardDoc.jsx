import React from "react";
import Detail from "./Detail";

function CardDoc(props) {
  return (
    <div className="row AGrow">
        <div className="col AGcol">
        <Detail detailInfo={props.name} />
        </div>
        <div className="col AGcol">
        <Detail detailInfo={props.mobileno} />
        </div>
        
    </div>
  );
}

export default CardDoc;
