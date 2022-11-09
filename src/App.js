import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {

  return("Eden Gil")
  }

  getMorningGreeting() {
    return(<div>Good Morning</div>)

  }

  getEveningGreeting() {
    return(<div>Good Evening</div>)
  }

  showCompany(name, revenue) {
    return(
      <div id={name}>{name} makes revenue every year of {revenue} milon $</div>
    )
  }

  getClassName(temperature) {
    let str = "sac";
    if (temperature < 15) {
      str = "freezing";
    }else if (temperature < 30 && temperature >= 15){
      str= "fair";
    }else{
      str = "hell-scape";
    }
    return (<div id="weatherBox" class={str}></div>)
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name, c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(17)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
