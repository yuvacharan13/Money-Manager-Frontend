import React, { useContext } from "react";
import {UserContext} from "./UserContext"

const HomeData = () => {
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
     console.log(utc)
    const {state, setState} = useContext(UserContext);
    console.log(state, "yuva")

    // if(item.income == true){
    //   var list = document.getElementsByClassName("list-group-item");
    //   list.style.backgroundColor = "Red"
    // }

    return(
        <div>
            <ul className="list-group">
          {state.data.map((item,idx) => {
            return (
              <li className="list-group-item" key={idx}>
                <span>
                  <span>{item.category}</span>
                  <span>{item.division}</span>
                  <span>{item.amount}</span>
                  <span>{item.date}</span>
                  
                    {/* <span className="float-right" onClick={props.deleteTodo.bind(this, item._id)}> Delete </span> */}
                  </span>
              </li>
            );
          })}
        </ul>
        </div>
    );
}

export default HomeData;