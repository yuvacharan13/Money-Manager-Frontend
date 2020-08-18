import React, { useContext } from "react";
import {UserContext} from "./UserContext"
// import './App.css'



const WeeklyData = () => {
   
    // var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //  console.log(utc)
    const {state, setState} = useContext(UserContext);
    console.log(state, "yuva")
    return(
        <div>
            {/* <h1>{utc}</h1> */}
            <ul className="list-group">
          {state.data.map((item,idx) => {
            return (
              <li className="list-group-item" key={idx}>
                <span>
                  <span>{item.category}</span>
                  <span>{item.division}</span>
                  <span>{item.amount}</span>
                  <span>{item.date}</span>
                  <span>{item.income}</span>
                  <span>{item.expense}</span>
                    {/* <span className="float-right" onClick={props.deleteTodo.bind(this, item._id)}> Delete </span> */}
                  </span>
              </li>
            );
          })}
        </ul>
        </div>
    );
}

export default WeeklyData;