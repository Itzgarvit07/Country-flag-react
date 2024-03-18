import React, { useEffect, useState } from "react";
import axios from "axios";
import './country.css';

function Country() {
  const [country, setCountry] = useState("");
  const [codes, setCodes] = useState({});
  const [flag, setFlag] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://flagcdn.com/en/codes.json");
      setCodes(response.data);
      // console.log(response.data)
    }
    fetchData();
    setCountry(country.charAt(0).toUpperCase() + country.slice(1))
  }, [country]);



  // function modifyCountryName(name) {
  //   // const temp = name.split("");
  //   // const firstLetter = temp[0].toUpperCase();
  //   // temp.splice(0, 1, firstLetter);
  //   // setCountry(temp.join(""));
  // }

  function getFlag() {
    for (let x in codes) {
      if (codes[x] === country) {
        setFlag(x);
      }
    }
  }

  return (
    <>
    <div className="main">
        <div className="input">
      <input
        type="text"
        placeholder="Enter a country name"
        value={country}
        onChange={(e) => 
          // modifyCountryName(e.target.value)
          setCountry(
            e.target.value
          )
        }
      />
      <button onClick={getFlag}> Get Flag</button>
      </div>
      <div className="result">
        {flag ? (
          <img src={`https:flagcdn.com/w320/${flag}.png`} alt=""/>
       
        ) : (
          ""
        )}
      </div>
      </div>
    </>
  );
}

export default Country