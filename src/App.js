import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants/index';

//Components imports
import Header from './Components/Header'
import Article from './Components/Article/Article';
import Explanation from './Components/Article/Explanation'
import Footer from './Components/Footer'

function App() {

  const [ data, setData ] = useState([])
  // ! const [ date, setDate ] = useState([])

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

  // useEffect(() => {
  //   const getDate = () => {
  //     axios.get(`${BASE_URL}?api_key=DEMO_KEY&date=${data.date}`)
  //     .then(res => {
  //       console.log(res)
       
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  //   }
  //   getDate()
  // }, [date])

  return (
    <div className="App">
      <Header date={data.date}/>     {/* pass in props = date , media_type */}
      <Article  img={data.url} title={data.title}/>    {/* pass in props => img = data.url  ,  title  */}
      <Explanation explanation={data.explanation} />   {/* pass in props => explanation */}
      <Footer copyright={data.copyright} version={data.service_version} media={data.media_type}/>  {/* pass in props => copyright , service_version , media_type */}
      <p> 
        Read
        through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

{/* {
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
} */}