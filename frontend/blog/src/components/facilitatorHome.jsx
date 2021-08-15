import axios from "axios";
import React, { Component } from "react";

class FacilitatorHome extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost:8000/question/").then((response) => {
      console.log(response);
      const data = response.data;
      this.setState({ data });
    });
  };

  handleDelete = (id) => {
    axios.post("http://localhost:8000/questiondel/",{'id' : id}).then((response) => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <h1>Unanswered Questions</h1>
        {this.state.data.map((student) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-titl">{student.get_username}</h5>
              <p className="card-text">{student.question}</p>
            </div>
            <button
              onClick={() => this.handleDelete(student.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default FacilitatorHome;
