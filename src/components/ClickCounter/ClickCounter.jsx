import React, {Component} from 'react'
import Btn from 'components/Btn'

const initialState = {attempt: 1, secret: Math.floor((Math.random() * 100) + 1), round: 1, userInput: '', sysMsg : "", wins: 0, btnDisabled: false}

export default class ClickCounter extends Component {

    state = initialState

    handleRestart = () => {
        this.setState (initialState)
    }

    handleClick = () => {

        let newSysMsg = ''

        if (parseInt(this.state.userInput) !== this.state.secret) {
            if (this.state.attempt == 7) {
                if (this.state.round == 3 || (this.state.round == 2 && this.state.wins == 0)) {
                    newSysMsg = 'Game over';
                    this.setState({btnDisabled: true})
                } else {
                    newSysMsg = 'You lost this round, new round and new secret number was set'
                    this.setState({round: this.state.round + 1, attempt: 1})
                }
            } else {
                    if (parseInt(this.state.userInput) < this.state.secret) {
                        newSysMsg = 'The secret number is greater than your input'
                    } else {
                        newSysMsg = 'The secret number is lower than your input'
                    }

                    this.setState({attempt: this.state.attempt + 1})
            }
        } else {
            if (this.state.wins == 1) {
                newSysMsg = 'You won this game!'
                this.setState({btnDisabled: true})
            } else {
                newSysMsg = 'You won this round, new round and new secret number was set' + this.state.wins
                this.setState({round: this.state.round + 1, wins: this.state.wins + 1})
            }
        }

        this.setState({sysMsg: newSysMsg})
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    render() {
        return (

            <div className="row justify-center p-t bg-tertiary section">
                <div className="card standard-border card-narrow shadow">
                    <div className="info">
                        <div>Guess</div>

                        <div className="m-t">
                            <span className="info-key">You should guess number from 1 to 100</span>
                        </div>
                        <div className="m-t">
                            <span className="info-key">You have 7 attempts per number</span>
                        </div>
                        <div className="m-t">
                            <span className="info-key">You will play three rounds</span>
                        </div>
                        <div className="m-t">
                            <span className="info-key">If you guess the numbers in two of them, you win.</span>
                        </div>

                        <div className="m-t">
                            <span className="info-key">Attempts left:</span>
                            <span className="text-accent">{8 - this.state.attempt}</span>
                        </div>

                        <div className="m-t">
                            <span className="info-key">Round:</span>
                            <span className="text-accent">{this.state.round}</span>
                            <span className="info-key"> FIGHT!</span>
                        </div>

                        <div className="m-t">
              <span className="info-key">
                  <input className="fancy-input" type="text" placeholder="Enter number 1 - 100"
                         onChange={this.handleChange}/>
              </span>

                            <div className="m-t">
                                <span className="text-accent">{this.state.sysMsg}</span>
                            </div>
                        </div>
                    </div>

                    <Btn className="m-t d-block" onClick={this.handleClick} disabled={this.state.btnDisabled}>Guess</Btn>
                    <Btn className="m-t d-block" onClick={this.handleRestart} display={this.state.btnDisabled ? 'inline' : 'none'}>Restart</Btn>
                </div>
            </div>

        )
    }
}
