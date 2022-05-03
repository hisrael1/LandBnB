import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }
  
  render () {
   return (
    <>
      <h1>{this.props.formType}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Email: 
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>
        <br />
        <label>First Name: 
          <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
        </label>
        <br />
        <label>Last Name: 
          <input type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
        </label>
        <br />
        <label>Password: 
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        <br />
        <button>{this.props.formType}</button>
      </form>
      <Link to={`/${this.props.formType === "login" ? "signup" : "login"}`}></Link>
        {
          this.props.errors ? 
            this.props.errors.map( error => <p>{error}</p>)
              :
            ""
        }
     </>
   )
  }
}

export default SignupForm;