import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
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

  demoSubmit(e) {
      e.preventDefault();
      const user = {
        email: "user@demo.com",
        password: "password"
      }
      this.props.processForm(user);
  };
  
  render () {
   return (
    <>
      <h1>{this.props.formType}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Email: 
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>
        <br />
        <label>Password: 
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        <br />
        <button>{this.props.formType}</button>
        {/* change this when I get the chance */}
        <button onClick={this.demoSubmit}>{'Demo'}</button>
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

export default SessionForm;