import React, {Component} from 'react'
import axios from 'axios';
import WeatherDummy from "../components/WeatherDummy/WeatherDummy";
export default class WeatherContainer extends Component {

    state = {
        weatherData:
            {
                "location":{
                    "name":"Moscow", //How to push this change to component on DidMount?
                },
                "current":{
                    "temp_c":null,
                    "condition":{
                        "icon":null
                    }
                }
            }
    };

    async componentDidMount() {
        await this.makeAnAPICall('Moscow')
    }

    makeAnAPICall = (city) => {
        const url = 'https://api.apixu.com/v1/current.json?key=b7aea933389d4e6facb160955180212&q=';
        axios.get(url + city).then(
            response => this.setState({weatherData: response.data})
        )
    };

    handleSelectCity = async (city) => {
        console.log(city);
        await this.makeAnAPICall(city)
    };

    render() {
        return (
            <WeatherDummy onSelectCity={this.handleSelectCity} weatherData={this.state.weatherData} />
                );
    }
};