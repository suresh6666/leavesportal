import React, { Component, PropTypes } from 'react';
import {createStore,bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup,
         Label, Input, FormText,Collapse, Navbar, NavbarToggler, 
         NavbarBrand, Nav, NavItem, NavLink,Card, CardImg, CardText, 
         CardBody,CardTitle, CardSubtitle
       } from 'reactstrap';
import FontAwesome from "react-fontawesome";
import NavbarMenu from './nav';
import {addUser} from '../actions/index';
class Newleave extends Component{
    constructor(props){
        super(props);
        let user1
        if(this.props.users.username!= undefined){
        user1 = this.props.users.username;
        }
        this.state = {
            date:'',
            purpose:'',    
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
        this.setState({
            date:this.state.date,
            purpose:this.state.purpose,
        })
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
        console.log(this.props.users.username);
        return(
            <div>
                <NavbarMenu history={this.props.history}/>
                <div className = "container">
                <div className = "row justify-content-center">
                <div className = "col-md-6 col-md-offset-3" style = {{marginTop:"30px"}}>
                <Card className = "card_style" 
							id = "my-card-mcs">
				        	<CardBody>
				          		<CardTitle className = "header_style">New Leave</CardTitle>
				          		<hr className = "hr_style" 
				          			id = "hr-style-mcs"
				          		/>
				          		<CardText>
                                  <Form onSubmit = {this.onSubmit.bind(this)}>
                                    <Label style ={{paddingLeft:"20px",fontWeight:"bold"}}>Date</Label>
                                    <div style={{padding:"0px 20px"}}>

                                  <Input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="MM-DD-YYYY"
                                    name="date"                               
                                    value={this.state.date}
                                    onChange={this.handleChange}>
                                  </Input>
                                  </div>

                                      <FormGroup>
                                      <Label style ={{paddingLeft:"20px",fontWeight:"bold",marginTop:"10px"}}>Leave Purpose</Label>
                                  <div style={{padding:"0px 20px"}}>
                                  <Input 
                                    type="text-area" 
                                    className="form-control" 
                                    placeholder="Purpose of leave"
                                    name="purpose"                               
                                    value={this.state.purpose}
                                    onChange={this.handleChange}>
                                
                                  </Input>
                                  </div>
                                      </FormGroup>
                                      <div style = {{justifyContent:"center",marginLeft:"200px"}}>
                                      <Button className = "btn btn-info" id="submit" type="submit" >Submit</Button>
                                      <Button styel = {{marginLeft:"15px"}} className = "btn" id="submit" type="submit" >Cancel</Button>
                                      </div>

                                    </Form>
				          		</CardText>
				        	</CardBody>
			      		</Card>
                          </div>
                          </div>
       
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
      users: state.activeUser
    };
  }
  export default connect(mapStateToProps)(Newleave);
  