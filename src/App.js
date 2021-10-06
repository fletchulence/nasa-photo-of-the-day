import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants/index'

function App(props) {

  const [ data, setData ] = useState()

  useEffect(() => {
    function getData() {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    }
    getData()
  }, [])

  return (
    <div className="App">
        {
          data &&
        <>
        <div>
          <p>{data.date}</p>
          <div className='imgContainer'>
            <img src={data.url} href='${data.url}'/>
            <h1> {data.title} </h1>
          </div>
        </div>
        </>
        }
      <p> 
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
