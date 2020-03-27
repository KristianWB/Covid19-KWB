import React,{ Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import CountryCovid from './CountryCovid.js';
import countryList from './index.js';








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
      <h1>Covid-19 Numbers</h1>
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
