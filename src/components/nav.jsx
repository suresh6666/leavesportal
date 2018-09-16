import React from 'react';
import {createStore,bindActionCreators} from 'redux';
import { withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import FontAwesome from "react-fontawesome";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import {addUser} from '../actions/index';


class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
   // this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    //this.successProfile = this.successProfile.bind(this);
    this.state = {
      isOpen1: false,
      username:"",
    };
    if (localStorage.getItem('loggedUser')) {
      const user = JSON.parse(localStorage.getItem('loggedUser'));
      this.props.addUser(user);
    } else {
      this.props.history.push('');
    }
  }

  toggle() {
    this.setState({
      isOpen1: !this.state.isOpen1,
     
    });
  }
  handleLogout(){
    this.props.history.push('');
    localStorage.removeItem('loggedUser');
  }
  render() {
    const {fix} = this.props;
    return (
      <div>
        <Navbar className="navbar navbar-expand-sm navbar-inverse" fixed={fix ? 'top' : ''} >
          <div className="container-fluid">
          <div className="col-md-5 col-sm-5">
              <span className="navbar-brand">
              <Link to='/'>
                <span
                  className="navbar-brand" 
                  id="navbarTogglerDemo">
                 Leaves Portal</span>
              </Link>
            </span>
           
              <NavbarToggler className="navbar-toggler hidden-sm-up tgl_btn" onClick={this.toggle} >
             <FontAwesome 
                   name = "bars"
                   size = "1x"                           
               />
            </NavbarToggler>

          </div>
          <div className="col-md-7 col-sm-7 pull-right">
             <Collapse className="navbar-toggleable-xs" isOpen={this.state.isOpen1} navbar>
            <Nav className="nav navbar-nav float-xs-right ml-auto pull-right" style={{float: "right"}} navbar>
            {this.props.user.role === "admin" &&
                <NavItem className="float-sm-right" >  
                  <a className="nav-link" href='/dashboard'>Dashboard</a>
                </NavItem>
            }
            {this.props.user.role === "admin" &&
                <NavItem className="float-sm-right">  
                  <a className="nav-link" href='/pending'>Pending Leave Requests</a>
                </NavItem>
            }
            {this.props.user.role === "admin" &&        
                <NavItem className="float-sm-right">  
                  <a className="nav-link" href='/approved'>Approved Leaves</a>
                </NavItem>
            }
            {this.props.user.role === "user" &&        
                <NavItem className="float-sm-right">  
                  <a className="nav-link" href='/myleave'>My Leaves</a>
                </NavItem>
            }
            {this.props.user.role === "user" &&        
                <NavItem className="float-sm-right">  
                  <a className="nav-link" href='/newleave'>New Leave</a>
                </NavItem>
            }
              <NavItem className="float-sm-right">  
                <Link className="nav-link" to='/'>
                <span>
                    <FontAwesome
                              style = {{fontSize:"17px",marginRight:"6px",marginLeft:"10px"}}
                              name = "user"     
                    />
                </span><span>{this.props.user.username}</span></Link>
              </NavItem>
              <NavItem className="float-sm-right">                
                   <Link to="#" 
                   className="nav-link"                    
                   onClick={this.handleLogout}>Log Out
                    </Link>               
              </NavItem>  
            </Nav>
          </Collapse>
          </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user:state.activeUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser:addUser},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);

Navbar.propTypes={
    fixed: PropTypes.string,
    color: PropTypes.string,
}