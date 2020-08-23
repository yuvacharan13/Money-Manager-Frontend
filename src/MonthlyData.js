import React, { useState , useEffect, useContext } from "react";
import {UserContext} from "./UserContext"
import { MDBDataTable } from 'mdbreact';
// import './App.css'



const MonthlyData = () => {
   
  const {state, setState} = useContext(UserContext);
  const [monthlyData, SetMonthlyData] = useState({data: []});

  useEffect(() => {
    SetMonthlyData(state);
  },[state.data , monthlyData.data]);


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
    rows: monthlyData.data};
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

export default MonthlyData;