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
import NavbarMenu from './nav';
class PendingLeaves extends Component{
    constructor(props){
        super(props);
        this.state = {
            pending_leaves:[
                {
                    user:"user1",
                    date:'Jun 10,2018',
                    purpose:"festival",
                    status:"pending",
                },
                {
                    user:"user2",
                    date:'Jun 10,2018',
                    purpose:"festival",
                    status:"pending",
                },
                {
                    user:"user3",
                    date:'Jun 10,2018',
                    purpose:"festival",
                    status:"pending",
                },
                {
                    user:"user4",
                    date:'Jun 10,2018',
                    purpose:"festival",
                    status:"pending",
                }
            ]

            
        }
        this.renderTable = this.renderTable.bind(this);
    }
    renderTable(value){
        let tr_rows = [];
        let keys = ["date","user","purpose","status"];
        for(let value1 of value){
            let td_values = [<td><button className = "btn btn-primary">Approve</button></td>];
            for(let key of keys){
                td_values.push(<td>{value1[key]}</td>)
            }
            tr_rows.push(<tr style = {{textAlign:"center"}}>{td_values}</tr>)
        }
        return tr_rows;
    }
    render(){
        return(
            <div>
                <NavbarMenu history={this.props.history}/>
                <div className = "container">
                <div className = "table table-responsive table-bordered" style = {{marginTop:"30px"}}>
			          	    <table id="my-table" className = "table table-striped">
								<tr ref="table_header_hrr">
                                    <th style = {{textAlign:"center"}}>Decision</th>
                                    <th style = {{textAlign:"center"}}>Date</th>
									<th style = {{textAlign:"center"}}>User</th>
									<th style = {{textAlign:"center"}}>Leave Purpose</th>
									<th style = {{textAlign:"center"}}>Status</th>
								</tr>
								<tbody>
                                {this.renderTable(this.state.pending_leaves)}
								</tbody>
							</table>
						</div>

                </div>
            </div>
        )
    }
}
export default PendingLeaves;