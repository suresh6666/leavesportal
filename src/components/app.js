import React, { Component } from 'react';
import NavbarMenu from './nav';
import {createStore,bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, 
  NavbarBrand, Nav, NavItem, NavLink,
  Button,Popover,PopoverBody,Form,FormGroup,
  FormText,Label,Input,Card, CardImg, CardText, 
  CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import FontAwesome from "react-fontawesome";

import {addUser} from '../actions/index';
export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      panding_leaves:[
        {
          user:"user1",
          purpose:"festival",
          status:"pending",
      },
      {
          user:"user1",
          purpose:"festival",
          status:"pending",
      },
      {
          user:"user1",
          purpose:"festival",
          status:"pending",
      },
      {
          user:"user1",
          purpose:"festival",
          status:"pending",
      }
      ],
      approved_leaves:[
        {
          user:"user1",
          purpose:"sick",
          status:"Approved",
      },
      {
          user:"user2",
          purpose:"personalwork",
          status:"Approved",
      },
      {
          user:"user3",
          purpose:"mother sick",
          status:"Approved",
      },
      {
          user:"user4",
          purpose:"festival",
          status:"Approved",
      },      {
        user:"user5",
        purpose:"festival",
        status:"Approved",
    }
  ],
  last_login:"Yesterday"

    }
  }

  render() {
    let data = this.state.panding_leaves;
    data = data.length;
    let approved = this.state.approved_leaves;
    approved = approved.length;
    return (
      <div>
      <NavbarMenu history={this.props.history}/>
      <div className = "container">
      {this.props.users.role === "admin" &&
      <div>
      <div style = {{textAlign:"center",marginTop:"10px"}}>Last Login<span style = {{fontWeight:"bold"}}> {this.state.last_login}</span></div>
      <div className = "row justify-content-center" style = {{alignItems:"center",marginTop:"30px"}}>
        <div className = "col-md-6">
        <Card className = "card_style" 
							id = "my-card-mcs">
				        	<CardBody>
				          		<CardTitle className = "header_style">Pending Leave Requests</CardTitle>
				          		<hr className = "hr_style" 
				          			id = "hr-style-mcs"
				          		/>
				          		<CardText className = "value_style">
                      <span>
                      <a href = "/pending">
                      <span>{data}</span>
                      </a>
                      </span>
				          		</CardText>
				        	</CardBody>
			      		</Card>

        </div>
        <div className = "col-md-6">
        <Card className = "card_style" 
							id = "my-card-mcs">
				        	<CardBody>
				          		<CardTitle className = "header_style">Approved Leaves</CardTitle>
				          		<hr className = "hr_style" 
				          			id = "hr-style-mcs"
			          		/>
				          		<CardText className = "value_style">
				          	  <a href = '/approved'>{approved}</a>
				          		</CardText>
				        	</CardBody>
			      		</Card>

        </div>
      </div>
      </div>
      }
      {this.props.users.role === "user" &&
      <div>
      <div className = "row justify-content-center" style = {{alignItems:"center",marginTop:"30px"}}>
        <div className = "col-md-6">
        <Card className = "card_style" 
							id = "my-card-mcs">
				        	<CardBody>
				          		<CardTitle className = "header_style">MY Leaves</CardTitle>
				          		<hr className = "hr_style" 
				          			id = "hr-style-mcs"
				          		/>
				          		<CardText className = "value_style">
				          	 <a href = '/myleave'>{data}</a> 
				          		</CardText>
				        	</CardBody>
			      		</Card>

        </div>
        <div className = "col-md-6">
        <Card className = "card_style" 
							id = "my-card-mcs">
				        	<CardBody>
				          		<CardTitle className = "header_style">New Leave</CardTitle>
				          		<hr className = "hr_style" 
				          			id = "hr-style-mcs"
			          		/>
				          		<CardText style ={{textAlign:"center",paddingTop:"30px",paddingBottom:"30px"}}>
				          	    For new leave click on the click <a href = "/newleave">here</a> link in navbar header
				          		</CardText>
				        	</CardBody>
			      		</Card>

        </div>
      </div>
      </div>
      }

      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    users: state.activeUser
  };
}
export default connect(mapStateToProps)(App);
