import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import Card from './Card';
import Navbar from './Navbar';
import Api from './Api';



// ye tarik easy h but isse or zyda easy niche h 
// function fun(cvalue){
//   return(
// <Card imgsrc={cvalue.imgsrc}
//       movieName={cvalue.movieName}
//       discrip={cvalue.discrip}
//       btn={cvalue.btn} />

//   )
// }
// {Api.map(fun)} //----ye niche render m bhi likh skte hai  direct

ReactDOM.render(
<>
<Navbar/>
{/* Customize tags of customize Elements */}
    {/* <Card imgsrc="https://upload.wikimedia.org/wikipedia/en/0/02/The_Old_Guard_2020_film_poster.png"  movieName="OLD GUARD"  discrip="Lorem, ipsum dolor sit amet consectetur adipisicing elit."  btn="Watch now"  link=""  />
    <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg-YNsQaadZrhK7e3HDqvhD2knPF6nNwJT8_Kk-77AY_RGwWR30diC9Nc9SaeM5tabac&usqp=CAU"  movieName="MONEY HEIST"  discrip="Lorem, ipsum dolor sit amet consectetur adipisicing elit."  btn="Watch now"  link=""  />
    <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpILFyRc76qhCb59ftLZpWAmbZy36EIdD5RaI18BptFJyG-QE1rOEaExMzxxdJ0BVLo2s&usqp=CAU"  movieName="KGF 2"  discrip="Lorem, ipsum dolor sit amet consectetur adipisicing elit."  btn="Watch now"  link=""  />
    <Card imgsrc="https://stat2.bollywoodhungama.in/wp-content/uploads/2021/11/RRR-3.jpg"  movieName="RRR"  discrip="Lorem, ipsum dolor sit amet consectetur adipisicing elit."  btn="Watch now"  link=""  />
  */}

  {/* thoda asaan tarika 
<Card imgsrc={Api[0].imgsrc}
      movieName={Api[0].movieName}
      discrip={Api[0].discrip}
      btn={Api[0].btn}
/>
<Card imgsrc={Api[1].imgsrc}
      movieName={Api[1].movieName}
      discrip={Api[1].discrip}
      btn={Api[1].btn}
/>
<Card imgsrc={Api[2].imgsrc}
      movieName={Api[2].movieName}
      discrip={Api[2].discrip}
      btn={Api[2].btn}
/>
<Card imgsrc={Api[3].imgsrc}
      movieName={Api[3].movieName}
      discrip={Api[3].discrip}
      btn={Api[3].btn}
/>

 */} 
    {/* ye jo hai sabse shotr or asan tarika hai mapping karna ne  ka */}
{Api.map((cvalue)=>
 <Card imgsrc={cvalue.imgsrc}
      movieName={cvalue.movieName}
      discrip={cvalue.discrip}
      btn={cvalue.btn}
  />)}
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita