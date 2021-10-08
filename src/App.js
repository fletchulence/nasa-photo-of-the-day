import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants/index';

//Components imports
import Header from './Components/Header'
import Article from './Components/Article/Article';
import Explanation from './Components/Article/Explanation'
import Footer from './Components/Footer'

const newDate = new Date().toISOString().slice(0, 10)
console.log(new Date().getDate())
//this will update on the day of use


function App() {

  const [ data, setData ] = useState([])
  const [ date, setDate ] = useState(newDate)
  const [ show, setShow ] = useState(false)

  useEffect(() => {  //? auto submit
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

  const submit = evt =>{
    evt.preventDefault()
    axios.get(`${BASE_URL}?api_key=DEMO_KEY&date=${date}`)
    .then(res => {
      console.log(res)
     setData(res.data)
     setDate(newDate) 
    })
    .catch(err => {
      console.error(err)
    })
  }

  function onChange (evt) {
    //console.log(evt.target.value)
    setDate(evt.target.value)
  }

  function buttonClick(evt){
    setShow(true)
  }

  return (
    <div className="App">
      <Header data={data} date={date} submit={submit} change={onChange}/>     {/* pass in props = date , media_type   onSubmit */}
      <Article onClick={buttonClick} img={data.url} title={data.title}/>    {/* pass in props => img = data.url  ,  title  */}
        {show ?  <Explanation explanation={data.explanation} /> : null }
       {/* pass in props => explanation */}
      <Footer copyright={data.copyright} version={data.service_version} media={data.media_type}/>  {/* pass in props => copyright , service_version , media_type */}
      <p> 
        Read through the instructions in the README.md file to build your NASA
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