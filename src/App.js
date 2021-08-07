import React from 'react';

import mainImage from "./assets/images/aneka-menu.png";
import CityCard from './components/CityCard';

function App() {
    // array dummy per 3 
    const citiesDummy = [
        { id: 72,     name: "Jakarta", country_name: "Indonesia"},
        { id: 11052,  name: "Bandung", country_name: "Indonesia"},
        { id: 170,    name: "Bali",    country_name: "Indonesia"}
    ];

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <a className="navbar-brand text-white">KULINER INDO</a>
        </nav>
        <div className="row" style={{ marginBottom: 30}}>
            <img src={mainImage} width="100%" alt="Aneka Manu"/>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-white bg-success mb-3 text-center">
              <div className="card-header"><h1>SELAMAT DATANG DI KULINER INDO</h1></div>
                <div className="card-body">
                    <h3 className="card-title">PALING ENAK PALING NIKMAT DENGAN MASAKAH INDO</h3>
                    <p className="card-text">INFORMASI RESTAURAN INDONESIA</p>
                    <p className="card-text">TERJAMIN HALAL ANEKA MENU</p>
                </div>
              </div>
            </div>
          </div>
      
      <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="row">
            <div className="col-12">
                <h2>FEATURED CITIES</h2>
            </div>
          </div>
     
          <div className="row">
            {citiesDummy.map(city => (

                // sama dengan include 
                <CityCard key={city.id} city={city} />

            ))}
          </div>
      </div>   
  </>
  
  );
}

export default App;
