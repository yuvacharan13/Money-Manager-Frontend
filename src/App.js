import React, { useState, useEffect } from 'react';
import './App.css';
// import AddButton from "./AddButton.js"
// import DisplayData from "./DisplayData.js"
import "bootstrap/dist/css/bootstrap.css";

import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import PopUp from "./PopUp.js"
import {UserContext} from "./UserContext"
import HomeData from "./HomeData";
import DailyData from "./DailyData";
import WeeklyData from "./WeeklyData";
import MonthlyData from "./MonthlyData";
import {
	Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'
import { userContext } from './UserContext';


const App = () => {
  const [state, setState] = useState({data: []})
  const [count, setCount] = useState(0);

  // const getData = (category,division,amount,date,income,expense) => {
  //   setState({data: [...state.data, {"category": category, "division": division,"amount": amount, "date": date, "income": income, "expense": expense}]})
  //   console.log("state" , state)
  // }

  useEffect(() => {
    fetch('https://money-managerr.herokuapp.com/fetch')
      .then(response => response.json())
      .then(response => {setState(response);})
  }, [count])

//   let data = [
//     { id: 1, date: '...', lastName: '...', address: '...'},
//     { id: 2, 'firstName': '...', lastName: '...', address: '...'},
//  ]

  
 

  const getData = (category,division,amount,date,income,expense) => {
    const postObj =  {"category": category, "division": division,"amount": amount, "date": date, "income": income, "expense": expense}
    
    fetch('https://money-managerr.herokuapp.com/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postObj),
      })
      .then(response => {response.json(); setState({data: [...state.data, postObj]})
      setCount(count+1);})
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });  
  };

  // export const NavbarLight = () => {
  //   const [hidden, setHidden] = useState(true);


  return (
    <div className="App">
        {/* <nav>
          <ul className="flex">
            <li>
              <Link to="/HomeData">Home</Link>
            </li>
            <li>
              <Link to="/DailyData">DailyData</Link>
            </li>
            <li>
              <Link to="/WeeklyData">WeeklyData</Link>
            </li>
            <li>
              <Link to="/MonthlyData">MonthlyData</Link>
            </li>
          </ul>
        </nav> */}
        <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="/">Money Manager</NavbarLink>
        {/* <Nav end>
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav> */}
      </Nav>
      <Nav start collapse expandSm >
        {/* <NavbarLink light active>Active</NavbarLink> */}
        <NavbarLink light href="/DailyData">Daily Data</NavbarLink>
        <NavbarLink light href="/WeeklyData">Weekly Data</NavbarLink>
        <NavbarLink light href="/WeeklyData">Montly Data</NavbarLink>
        {/* <NavbarLink light disabled href="#">Disabled</NavbarLink> */}
      </Nav>
    </Navbar>
        {/* <DisplayData displayData={state.data}/> */}
        <Switch>
        <UserContext.Provider value={{state, setState}}>
        <Route  path="/HomeData" component={HomeData} />
         <Route  path="/DailyData" component={DailyData} />
					<Route path="/WeeklyData" component={WeeklyData} />
          <Route path="/MonthlyData" component={MonthlyData} />
          {/* <Redirect from="/" to="/AddButton" /> */}
        </UserContext.Provider>
          
				</Switch>
        
        
        <PopUp getData={getData}/>
    </div>
  );
}

export default App;






