import React from 'react';


// funtion 
const CityCard = props => (

           <div className="col-4">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h3 className="card-title">{props.city.name}</h3>
                      <p>{props.city.country_name}</p>
                      <a href="/#" className="card-text">
                      SEE RESTAURAN IN{props.city.name}</a>
                  </div>
                </div>
              </div>
)


export default CityCard;