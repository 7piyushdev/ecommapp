import React from "react";
import "./Home.css";

const toursData = [
  {
    id: 1,
    date: "JUL16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL19",
    city: "TORONTO,ON",
    venue: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "JUNE16",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "JUNE2",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Tours</h1>
      <table class='table table-striped table-hover'>
        <thead class='thead-dark'>
          {toursData.map((tour) => {
            return (
              <tr key={tour.id}>
                <th scope='row'>{tour.date}</th>
                <td>{tour.city}</td>
                <td>{tour.venue}</td>
                <td>
                  <button className='btn btn-primary'>Buy Tickets</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default Home;
