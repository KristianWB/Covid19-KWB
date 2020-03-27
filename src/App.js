import React,{ Component } from 'react';
// import logo, { ReactComponent } from './logo.svg';
import './App.css';
import CountryCovid from './CountryCovid.js';








class App extends Component {

  state = {
    data: []
  }

  

  async fetchData() {
    var dataProvider = [];

    const result = await fetch(
      "https://covidapi.info/api/v1/country/dnk"
    ).then(response => response.json());

    var results = result.result;

    var days = [];
    Object.keys(results).forEach(key => {
      days.push(key);
    });
    var values = [];
    Object.values(results).forEach(value => {
      values.push(value);
    });

    for (var i = 0; i < days.length; i++) {
      dataProvider.push({
        date: days[i],
        confirmed: values[i].confirmed,
        deaths: values[i].deaths,
        recovered: values[i].recovered
      });
    }

    return dataProvider;
  }


  componentDidMount() {  
    this.fetchData().then(data =>{
      console.log(data)    
    })
    .then(data  => this.setState({data}))
  }

  componentWillUnmount() {}

  



  render() {

    const {countries} = this.props

    return (
    <div className="App">
      <header className="App-header">
          <img src="./Coronavirus-CDC-768x432.jpg" className="App-logo" alt="logo" />
          <br></br>

          <p>
            Scroll down to behold the horror of Scandinavia!!!
          </p>
          <a
            className="App-link"
            href="https://www.worldometers.info/coronavirus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            World numbers
          </a>
        </header>
      <h1>Covid-19 Numbers Scandinavia</h1>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}>
        {countries.map(
          (countryCovid, i) =>
          <CountryCovid
            key = {i}
            name={countryCovid.name}
            confirmed={countryCovid.confirmed}
            hospitalized={countryCovid.hospitalized}
            dead={countryCovid.dead}
            />
        )}
      </div>
      <div>
      </div>
    </div>
    );
  }
}



// export default App;
export default App;
