import React, { Component } from 'react'

export default class AddContact extends Component {

  state = {
    name:"",
    number:"",
  };

  add = (e) =>{
    e.preventDefault();
    if(this.state.name==="" || this.state.number==="" ){
      alert("All fields are mandatory");
      return
    }
this.props.addContactHandler(this.state);
this.setState({name:"",number:""});

  };
  render() {
    return (
      <div className='ui main'>
        <h2>
            Add Contact
        </h2>
        <form className='ui form' onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type="text" 
                name='name' 
                placeholder='name'
                 value= {this.state.name} onChange={(e)=> this.setState({name: e.target})}/>
            </div>

            <div className="field">
                <label>Phone Number</label>
                <input type="text"  placeholder='phone number'
                value= {this.state.number} onChange={(e)=> this.setState({number: e.target})}/>
            </div>

            <button className='ui button blue'> Add Contact</button>

        </form>
        
      </div>
    )
  }
}
