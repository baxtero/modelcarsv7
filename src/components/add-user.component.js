import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/users";
import UsersList from "./users-list.component";


class AddUser extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);

    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      fname: "",
      lname: "",
      email: "",
      zip: "",
      close: true,
      published: false,

      submitted: false,
    };
  }

  hideForm = () => { 
    document.getElementById("login-signup").classList.add("hide");
    };

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeFname(e){
    this.setState({
      fname: e.target.value,
    });
  }

  onChangeLname(e){
    this.setState({
      lname: e.target.value,
    });
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value,
    });
  }

  onChangeZip(e){
    this.setState({
      zip: e.target.value,
    });
  }

  saveUser() {
    const { title, description, fname, lname, email, zip } = this.state;

    this.props
      .createUser(title, description, fname, lname, email, zip)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          fname: data.fname,
          lname: data.lname,
          email: data.email,
          zip: data.zip,
          published: data.published,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      title: "",
      description: "",
      fname: "",
      lname: "",
      email: "",
      zip: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div id="login-signup" className="submit-form container-layout hide">
        <div className="left-div">
        <UsersList />
        </div>
        {this.state.submitted ? (
          <div className="center-div">
            <h4>User added successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add Another
            </button>
          </div>
        ) : (
              <div className="center-div">
                  <div className="account-container">
                      <div className="username">
                          <label>Username</label>
                          <input type="text"
                            className="form-control"
                            id="title"
                            required
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            name="title"></input>
                      </div>
                      <div className="password">
                      <label>Password</label>
                          <input type="password"
                          className="form-control"
                          id="description"
                          required
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                          name="description"></input>
                      </div>

                      <div className="fname signup-form">
                          <label>First Name</label>
                          <input type="text"
                          className="form-control"
                          id="fname"
                          required
                          value={this.state.fname}
                          onChange={this.onChangeFname}
                          name="fname"></input>
                      </div>  
                      <div className="lname signup-form">
                          <label>Last Name</label> 
                          <input type="text"
                          className="form-control"
                          id="lname"
                          required
                          value={this.state.lname}
                          onChange={this.onChangeLname}
                          name="lname"></input>
                      </div>
                      <div className="email signup-form">
                          <label>Email</label> 
                          <input type="email"
                          className="form-control"
                          id="email"
                          required
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          name="email"></input>
                      </div>
                      <div className="zip signup-form">
                          <label>Zip</label> 
                          <input type="text"
                          className="form-control"
                          id="zip"
                          required
                          value={this.state.zip}
                          onChange={this.onChangeZip}
                          name="zip"></input>
                      </div>
                  </div>

                  <div className="account-container">
                      <div className="submit">
                          <button onClick={this.saveUser} className="btn btn-success pointer">SUBMIT</button>
                      </div>
                      <div className="reset">
                          <button className="pointer">RESET</button>
                      </div>
                  </div>
              </div>
        )}
        <div className="right-div text-align-center"><i className="fas fa-times-circle close pointer" onClick={this.hideForm}></i></div>
      </div>
    );
  }
}

export default connect(null, { createUser })(AddUser);