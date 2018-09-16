import React, { Component, PropTypes } from 'react';
import {createStore,bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup,
         Label, Input, FormText,Collapse, Navbar, NavbarToggler, 
         NavbarBrand, Nav, NavItem, NavLink,
       } from 'reactstrap';
import FontAwesome from "react-fontawesome";
import loginUser from '../../network/authentication';
import {addUser} from '../actions/index';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state={
       password_type: 'password',
       log_data:[],
       username:'',
       password:'',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.successLogin = this.successLogin.bind(this);
    this.errorLogin = this.errorLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    if (localStorage.getItem('loggedUser')) {
      const user = JSON.parse(localStorage.getItem('loggedUser'));
      this.props.addUser(user);
      this.props.history.push('/dashboard');
    }
  }
  onSubmit(e){
    e.preventDefault();
    let data = this.props.users;
    data.forEach(user => {
      if (user.username === this.state.username && this.state.password === user.password) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.props.history.push('/dashboard')
        this.props.addUser(user);
      }
    });
  }
  successLogin(data) {
    this.setState({
      log_data:data.data,
    })
  }
  errorLogin(err) {
    console.log(err);
  }
  componentDidMount(){
    loginUser(this.successLogin,this.errorLogin);
  }
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
    [name]: value
    }); 
  }
  render(){
     const {fix} = this.props;
    const { handleSubmit} = this.props;

    return (
       <div className="top-content">
           <Navbar toggleable 
         fixed={fix ? 'top' : ''} 
          className="navbar navbar-expand-sm navbar-inverse">
          <NavbarToggler className="navbar-toggler hidden-sm-up" onClick={this.toggle} >
           <FontAwesome 
                 name = "bars"
                 size = "2x"                           
             />
            
          </NavbarToggler>
      
            <NavbarBrand 
              className="navbar-brand float-xs-right float-sm-left" 
              id="navbarTogglerDemo">
              Leaves Portal</NavbarBrand>
        
        </Navbar>
            <div className="inner-bg">
            <Container>
                         <div className="row">
                                  <div className="col-sm-6 col-sm-offset-3 form-box">
                                    <div className="d-flex justify-content-center">
                                      </div>
                                      <div className="form-bo">
                                      <div className = "row justify-content-center" style = {{textAlign:"center"}}><h3>Login</h3></div>

                                    <Form onSubmit = {this.onSubmit.bind(this)} className="login-form">
                                    <Label>User Name</Label>
                                  <Input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username"
                                    name="username"                               
                                    value={this.state.username}
                                    onChange={this.handleChange}>
                                  </Input>

                                      <FormGroup>
                                      <Label>Password</Label>
                                  <Input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                    name="password"                               
                                    value={this.state.password}
                                    onChange={this.handleChange}>
                                  </Input>
                                      </FormGroup>
                                      <Button className = "btn btn-info" id="submit" type="submit" >Submit</Button>
                                    </Form>
                                  </div>
                                  </div>
                              </div>
             </Container>
          </div>
        </div>
    );  
  }
};
function mapStateToProps(state){
  return{
    users:state.users
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser:addUser},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

