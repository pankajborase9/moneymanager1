
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Weekly from './data/Weekly';
import Yearly from './data/Yearly';
import  Monthly  from './data/Monthly';


function Dropdownn() {

  
    return ( <Dropdown>
      <Router>
        <Switch>
             < Route path ='/weekly' component={Weekly}/>
             < Route path ='/Yearly' component={Yearly}/>
             < Route path ='/Monthly' component={Monthly}/>
         </Switch>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Income and Expanditure
        </Dropdown.Toggle>

        <Dropdown.Menu>
               <Dropdown.Item>< Link to='./Monthwise'>Monthly </Link></Dropdown.Item>
               <Dropdown.Item>< Link to='./Weekly'>Weekly </Link></Dropdown.Item>
               <Dropdown.Item >< Link to='./Yearly'>Yearly</Link></Dropdown.Item>

        </Dropdown.Menu>
        </Router>
      </Dropdown> );
}

export default Dropdownn;