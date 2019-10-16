import React, { Component } from "react";
// import { PropTypes } from "prop-types";
import Message from "./Message";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      submitted: "Form Result Hill Show Here"
    };
  }

  handelNameChange = event => {
    let regular = /^[a-zA-Z]{3,30}/.test(event.target.value);

    this.setState({ isNameValid: regular });

    console.log("isnameValid", regular);
  };

  emailChange = event => {
    let regular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-][a-zA-Z0-9])?)*$/.test(
      event.target.value
    );
    this.setState({ isEmailValid: regular });
    console.log("this.state.Url", regular);
  };

  phoneChange = event => {
    let regular = /^[2-9]{1}[0-9]{9}$/.test(event.target.value);
    this.setState({ isPhoneValid: regular });
    console.log("this.state.PhoneValid", regular);
  };

  BlogURLChange = event => {
    let regular = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
      event.target.value
    );
    this.setState({ isUrlValid: regular });
    console.log("this.state.Ur", regular);
  };

  handelSubmit = event => {
    if (
      this.state.isEmailValid &&
      this.state.isNameValid &&
      this.state.isPhoneValid &&
      this.state.isUrlValid
    ) {
      this.setState({ submitted: "Form is completed" });
    } else {
      this.setState({ submitted: "Form is NOT completed" });
    }
  };

  render() {
    const { handelNameChange, emailChange, BlogURLChange, phoneChange,handelSubmit } = this;
    return (
      <div className="container">
        <h1 className="text-center">Form Validation</h1>
          <h3>
            Name:
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handelNameChange.bind(this)}
            />
          </h3>

          <h3>
            Email:
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={emailChange.bind(this)}
            />
          </h3>
          <h3>
            Phone:
            <input
              type="text"
              placeholder="Phone"
              name="Phone"
              onChange={phoneChange.bind(this)}
            />
          </h3>
          <h3>
            Blog URL:
            <input
              type="text"
              placeholder="URL"
              name="URL"
              onChange={BlogURLChange.bind(this)}
            />
          </h3>
          <div className="small-6 small-centered text-center columns">
            <button
              onClick={handelSubmit}
              className="button success expand round text-center"
            >
              submit
            </button>
          </div>
        <Message submitted={this.state.submitted} />
      </div>
    );
  }
}

export default Form;
