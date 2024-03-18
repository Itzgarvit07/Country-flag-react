// 
import React, { useState } from 'react';
import axios from 'axios';

const Wikipedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchWikipedia = async () => {
    try {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchTerm}&limit=10&namespace=0&origin=*&srsearch=${searchTerm}&formatversion=2`);

      setResults(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchWikipedia}>Search</button>
      {results.length > 0 && (
        <div className="data">
          <h2>{results[0]}</h2>
          <ul>
            {results[1].map((item, index) => (
              <li key={index}>
                <a href={`https://en.wikipedia.org/?curid=${results[0][index]}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Wikipedia;
