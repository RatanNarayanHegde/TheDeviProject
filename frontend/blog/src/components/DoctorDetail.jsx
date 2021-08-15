import React from "react";
import CardDoc from "./CardDoc";
import contacts from "../contactsDoc";

function createCard(contact) {
  return (
    <li>
      <CardDoc
        key={contact.id}
        name={contact.name}
        mobileno={contact.mobileno}
      />
    </li>
  );
}

function DoctorDetail() {
  return (
    <div>
      <h1 className="AGheading">Doctor Details</h1>
      <ol>{contacts.map(createCard)}</ol>
    </div>
  );
}

export default DoctorDetail;
