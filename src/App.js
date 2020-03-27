import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Papa from 'papaparse'


/*


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

/*

// trying to create function to extract text from webpage
function getInfected (source) {
  return
  var x = document.getElementById("myBtn").textContent;
}

*/



/*
window.onload=function()
{
   alert(extractContent("https://www.worldometers.info/coronavirus/"));
};
*/


class CovidNumbers extends React.Component {

  state = {
    covidNumber1: 0,
    covidNumber2: 0

  }

  

  ExtractContent1 = () => {

    let randomNumber;
    randomNumber = Math.random();
    console.log(randomNumber);
    this.setState(
      {
        covidNumber1: randomNumber
      }
    )

    /*
    return (
      fetch(url)
      .then((resp) => resp.console.log(resp)) // Transform the data into json

      // .then(function(data) {
        // Create and append the li's to the ul
    );
    */

  
 }

 ExtractContent2 = async () => {

  let url="https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/03-26-2020.csv"

  var data = Papa.parse.readRemoteFile(url, {
    // rest of config ...
  })

  // var data = Papa.parse(readRemoteFile());

  console.log(data);
}
 


  render () {
    return (
      <div className="CovidNubers">
        
        <header className="App-header">
          <img src='Coronavirus-CDC-768x432.jpg' className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button onClick={this.ExtractContent1}>Fetch data</button>      
          <button onClick={this.ExtractContent2}>Fetch data</button>          
    
          <p>
              Watch <code>Corona numbers</code> and stand paralyzed in awe
            </p>
            <ul>
              <li>Infected 
                <div className="infectedNumbers1">
                  The covidNumber 1 is :
                  {this.state.covidNumber1}
              </div>           
              <div className="infectedNumbers2">
                  The covidNumber 2 is :
                  {this.state.covidNumber2}
              </div>      
              </li>    
            </ul>
        </header>
    
        
      </div>
      ); 
  }
}



// export default App;
export default CovidNumbers;
