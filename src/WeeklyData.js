import React, { useState , useEffect, useContext } from "react";
import {UserContext} from "./UserContext" 
import { MDBDataTable } from 'mdbreact';

const WeeklyData = () => {
   

  const {state, setState} = useContext(UserContext);
  const [weeklyData, SetWeeklyData] = useState({data: []});

  useEffect(() => {
    SetWeeklyData(state);
    console.log("hai");
    console.log(weeklyData, "weekly");

  },[state.data , weeklyData.data]);


  const value = {
    columns: [
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Category',
        field: 'category',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Division',
        field: 'division',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 200
      }
    ],
    rows: weeklyData.data};
    return(
        <div>
            <MDBDataTable
              bootstrap4
              striped
              bordered
              small
              data={value} />
        </div>
    );
}

export default WeeklyData;
