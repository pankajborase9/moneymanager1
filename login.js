

import React from 'react';
import Firstpage from '../firstpage';


class login extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          password: '',
           toggle : false,
        };
      }
     

     handleChange = e => {
    this.setState({ name: e.target.value });
    console.log(e.target.name) };

    handlechange = e => {
        this.setState({ password: e.target.value });
        console.log(e.target.name)};


    handleSubmit = async e => {
        e.preventDefault();
        var err = await Object.keys(this.state).filter(key => {
          if (this.state[key] == '' && key !='toggle') {
            return key;
          }
        });
        console.log(err);

       if (err.length > 0) {alert('Please fill login details')}
       else {this.setState({toggle :!this.state.toggle})
                console.log([this.state.toggle])}
      };


      render() {
        return (
          <div>
            {' '}
            <h3>LOGIN</h3>
            <form onSubmit={e => this.handleSubmit(e)}>
              Name:{' '}
              <input
                type="text"
                name="Name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
              <br />
              <br />
             Password:{' '}
              <input
                type="text"
                name="Password"
                value={this.state.password}
                onChange={e => this.handlechange(e)}
              />
              <br />
              <br />
             
              <input type="submit"/>
            </form>
            <br/>
            <br/>
           {this.state.toggle ? <Firstpage/>:''}
           
          </div>
        );
      }
    }
 
export default login;