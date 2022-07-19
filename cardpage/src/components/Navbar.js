import React, { Component } from 'react'
import"./Navbar.css"
export class Navbar extends Component {
  render() {
    return (
        
      <div style={{backgroundColor:"#E5E5E5",height:'5rem',borderCollapse:"black"}}>
        <br></br>
        <div className='navwrapper' style={{display:'flex'}}>
        <div style={{fontWeight:"bold",marginLeft:'5rem',borderColor:"black",display:"flex",alignContent:'center'}}>
        YourChallenge
        </div>
        <div className='three' style={{marginLeft:"60%",marginBottom:'7rem',flexDirection:'row-reverse'}}>
        <div style={{ width:'4%'}} ><u></u>Pricing </div>
        <div>Download </div>
        
        <div className='u'>Product </div>
        </div>
        
        </div>


        
        </div>
    )
  }
}

export default Navbar