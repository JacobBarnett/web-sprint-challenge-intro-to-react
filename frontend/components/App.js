import React from "react";
import axios from "axios";
import Character from "./Character";
import { useEffect, useState } from "react";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:9009/api/people"),
      axios.get("http://localhost:9009/api/planets"),
    ])
      .then(([res1, res2]) => {
        setPeople(res1.data);
        setPlanets(res2.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {people.map((person) => {
        const homeworld = planets.find(
          (planet) => planet.id === person.homeworld
        );
        return (
          <Character
            key={person.id}
            name={person.name}
            homeworld={homeworld?.name || "Unknown"}
          />
        );
      })}{" "}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
