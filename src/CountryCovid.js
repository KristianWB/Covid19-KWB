import React from 'react';

const CountryCovid = ({name, confirmed, hospitalized, dead}) => {
    return (
      <section>
        <h2>{name}</h2>
        <p>Confirmed: {confirmed}</p>
        <p>Hospitalized: {hospitalized}</p>
        <p>Fragged: {dead}</p>
      </section>
    )
  }

  export default CountryCovid;