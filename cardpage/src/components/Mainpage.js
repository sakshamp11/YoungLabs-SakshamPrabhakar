import React, { Component } from 'react'
import axios from 'axios'
import { cardstemp } from './cardstemp';
import './Mainpage.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { style } from '@mui/system';
let flag = 0;
let first="" ;let last="";let t="";
let gen="";let streetname="";let code="";let city="";let state="";let con=""
let streetn="";let  o="";let d="";let dp=""
export class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
      
    }
  }
  async componentDidMount() {
    const res = await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020")
      ;
    let cardData = res.data;
    console.log(cardData);
    gen=cardData.results[0].gender
    first=cardData.results[0].name.first
    last=cardData.results[0].name.last
    t=cardData.results[0].name.title
   
    
    
    streetn=cardData.results[0].location.street.number
    streetname=cardData.results[0].location.street.name

    state=cardData.results[0].location.state
    city=cardData.results[0].location.city
    con=cardData.results[0].location.country
    code=cardData.results[0].location.postcode
    d=cardData.results[0].location.timezone.description
    o=cardData.results[0].location.timezone.offset
    dp=cardData.results[0].picture.medium
    

    




    this.setState({
      cards: [...cardData.results],
      // firstcard:this.state.cards[0]
    });

    console.log("mounting done with CDM third");
    console.log(this.state.cards[0]);

  }
  render() {
    return (
      <div className='cardscontainer'>
        <div style={{borderColor:"black"}}>
    
          <Card className='bigcard' sx={{ width: 540, height: 190, marginLeft: 50 }}>
          <div className='imgvard'>
          <img src={dp} className="imgr" alt="not found image" />         
          </div>
          <CardContent  style={{ backgroundColor: 'white',marginTop:"3%",marginLeft:'4%' }}>
          <u class="spelling-error">
            <Typography  sx={{ fontSize: 23 }} color="red" style={{ fontWeight: "bold",fontColor:'red' }} gutterBottom>
             {t}. {first} {last}
            </Typography></u>
              {streetn},{streetname},{city},{con},{code}
            <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
             {o}, {d}
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="lightgrey" gutterBottom>
             {gen} 
             
            </Typography>

          </CardContent>
        </Card>
       
        </div>
        <div className='cardlist'>
          {this.state.cards.map((cardEle) => (
            
          <Card sx={{ width: 270, height: 100, margin: 3 }}>
              <CardContent style={{ backgroundColor: 'white' }}>
                <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                  {cardEle.gender}  .NL
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" style={{ fontWeight: "bold" }} gutterBottom>
                  {cardEle.name.title}. {cardEle.name.first}{" "}{cardEle.name.last}
                </Typography>

                <Typography sx={{ fontSize: 12 }} color="red" gutterBottom>
                  {cardEle.email}
                </Typography>

              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    )
  }
}

export default Mainpage














{/* <div className='cardcon'>
         

         
         
            {this.state.cards.map((cardEle) => (


             
              <>
               <div className='each-card'>
                 <h5 className="card-title movie-title">{cardEle.name.first}</h5>
              </div>
              <div
              className="button-wrapper"
              style={{ display: "flex", justifyContent: "center" }}
            ></div>
              </>
             



            ))}
          </div>
        </div>

           
       */}
