import React, {Component} from 'react'
import Btn from 'components/Btn'


export default class WeatherDummy extends Component {

    state = {city : this.props.weatherData.location.name}

    handleClick = () => {
        this.props.onSelectCity(this.state.city);
    }

    handleChange = (event) => {
        this.setState({city: event.target.value})
    }

    render() {
        return (

            <div className="row justify-center p-t bg-tertiary section">
                <div className="card standard-border card-narrow shadow">
                    <div className="info">
                        <div>Weather</div>

                        <div className="m-t">
                            <span className="info-key">Enter City name</span>
                        </div>
                      <span className="info-key">
                          <input className="fancy-input" type="text" placeholder="Enter City Name"
                                 value={this.state.city} onChange={this.handleChange}/>
                      </span>

                            <div className="m-t">
                                <span className="text-accent">{this.props.weatherData.current.temp_c} °C</span>
                                <img src={this.props.weatherData.current.condition.icon}/>
                            </div>
                    </div>
                    <Btn className="m-t d-block" onClick={this.handleClick}>Get Weather</Btn>
                </div>
            </div>
        )
    }
}
