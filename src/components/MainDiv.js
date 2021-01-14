import React, { Component } from 'react'
import Footer from './Footer'
import Inp from './Inp'
import Results from './Results' 

class MainDiv extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             city:"",
             city_name:"",
             country:"",
             temp:"", 
             description:"",
             humidity:"",
             lat:"",
             lon:"",
             wind_dir:"",
             wind_speed:"",
             pressure:"",
             iconid:"",
             details:false
        }
    }

    nameChange = (e) =>{
        this.setState({
            city : e.target.value
        })
    }

    clickHandler = (e) => {
        // for getting the city name
        var city = this.state.city; 

        //for updating the state
        this.setState({
            city:""
        })

        //fetching data from api
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=494f6a215b83cd0bded1888b624c3de1')
        .then(response => response.json())
        .then(data => { 
           console.log(data); 
           this.setState({
               city_name : data['name'],
               country : data['sys']['country'],
               temp : data['main']['temp'], 
               lat : data['coord']['lat'],
               lon : data['coord']['lon'],
               pressure : data['main']['pressure'],
               humidity : data['main']['humidity'],
               iconid : data['weather']['0']['icon'],
               description : data['weather']['0']['description'],
               details:true
           })
        })
        .catch(error => alert("Enter Valid City Name ...!!!"))
    }
    render() {
        if(this.state.details)
        {
            return ( 
                    <div>
                    <Inp 
                        city ={this.state.city} 
                        nameChange={this.nameChange} 
                        clickHandler={this.clickHandler} 
                        />

                        <Results 
                        city = {this.state.city_name}
                        country = {this.state.country}
                        temp = {this.state.temp} 
                        lat = {this.state.lat}
                        lon = {this.state.lon}
                        pressure = {this.state.pressure}
                        humidity = {this.state.humidity}
                        iconid = {this.state.iconid}
                        description = {this.state.description}
                        /> 
                    </div> 
            )
       }
       return ( 
        <div>
           <Inp 
            city ={this.state.city} 
            nameChange={this.nameChange} 
            clickHandler={this.clickHandler} 
            /> 
        </div>
       )
    }
}

export default MainDiv
