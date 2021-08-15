import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <li>
      <Card
        key={contact.id}
        username={contact.username}
        name={contact.name}
        school={contact.school}
        std={contact.std}
        age={contact.age}
        dob={contact.dob}
        mobileno={contact.mobileno}
      />
    </li>
  );
}

function StudentDetail() {
  return (
    <div>
      <h1 className="AGheading">Student Details</h1>

      <ol>{contacts.map(createCard)}</ol>
    </div>
  );
}

export default StudentDetail;
