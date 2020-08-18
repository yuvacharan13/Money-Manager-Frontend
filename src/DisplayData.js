import React, { useState } from "react";

const DisplayData = (props) => {
    

    return (
        <div>
            <ul className="list-group">
          {props.displayData.map((item,idx) => {
            return (
              <li className="list-group-item" key={idx}>
                <span>
                  <span>{item}</span>
                    {/* <span className="float-right" onClick={props.deleteTodo.bind(this, item._id)}> Delete </span> */}
                  </span>
              </li>
            );
          })}
        </ul>
        </div>
    );
}

export default DisplayData; 