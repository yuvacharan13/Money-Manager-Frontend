import React, { useState, useContext, useEffect } from "react";
import {UserContext} from "./UserContext"
import BootstrapTable from 'reactjs-bootstrap-table';
import { MDBDataTable } from 'mdbreact';

const DailyData = () => {

  const {state, setState} = useContext(UserContext);
  const [dailyData, SetDailyData] = useState({data: []});

  useEffect(() => {
    SetDailyData(state);
  },[state.data , dailyData.data]);


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
    rows: dailyData.data};
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


export default DailyData;