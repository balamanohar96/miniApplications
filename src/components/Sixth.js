import React, { useState } from "react";
import {
  canadaStates,
  indiaStates,
  uaeStates,
  usaStates,
} from "../constants/countryStates";

const Sixth = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);
  const countries_states = [
    { country: "Canada", states: canadaStates },
    { country: "India", states: indiaStates },
    { country: "UAE", states: uaeStates },
    { country: "USA", states: usaStates },
  ];

  const countryChangeHandler = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    const index = countries_states.findIndex(
      (each) => each.country === selectedCountry
    );
    if (index === -1) {
      setStates([]);
    } else {
      setStates(countries_states[index].states);
      setState("");
    }
  };

  const stateChangeHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="third para">
      <p>This is sixth page, Please select a country and a state</p>
      <div>
        <label htmlFor="country">Country :</label>
        <select id="country" value={country} onChange={countryChangeHandler}>
          <option value="">Select Country</option>
          {countries_states.map((each) => {
            return (
              <option key={each.country} value={each.country}>
                {each.country}
              </option>
            );
          })}
        </select>
      </div>{" "}
      <div>
        <label htmlFor="state">State :</label>
        <select id="state" value={state} onChange={stateChangeHandler}>
          <option value="">Select State</option>
          {states.map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
        </select>
      </div>
      {country && state && (
        <h4 className="country-state">
          {country} - {state}
        </h4>
      )}
    </div>
  );
};

export default Sixth;
