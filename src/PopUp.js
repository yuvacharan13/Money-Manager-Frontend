import React, {useState} from  "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PopUp = (props) => {
    

    let history = useHistory();

    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [category, SetCategory] = useState("");
    const [amount, SetAmount] = useState("");
    // const [date, SetDate] = useState("");
    const [division, SetDivision] = useState("");

    // if(date == ""){
    //     SetDate(utc)
    // }


    const handleCategory = (e) => {
        SetCategory(e.target.value) 
    };

    const handleAmount = (e) => {
        SetAmount(e.target.value)
    };
    
    
    const handleClose = () => {
        setShow(false);
        console.log(category);
        props.getData(category,division,amount,curDate,incometab,expensetab);
        SetCategory("");
        SetAmount("");
    }
    
    const [incometab, SetIncometab] = useState(false);
    const [expensetab, SetExpensetab] = useState(false);
    
    // var incomeButton = document.getElementById('incomeButton');
    // var expenseButton = document.getElementById('expenseButton');

    const handleIncome = () => {
       if(incometab == false){
        SetIncometab(true); SetExpensetab(false);
        // incomeButton.style.backgroundColor = "green";
        // expenseButton.style.backgroundColor = "grey";
       }
    }

    const handleDivision = (e) =>{
        SetDivision(e.target.value);
    } 

    const handleExpense = () => {
        if(expensetab == false){
         SetExpensetab(true); SetIncometab(false); 
        //  expenseButton.style.backgroundColor = "red";
        //  incomeButton.style.backgroundColor = "grey";
        }
    }

    

    // if(incometab == true){
        
    // }

    
    // if(expensetab == true){
        
    // }
    
    const [date, SetDate] = useState(new Date());

    const [curDate, SetCurDate] = useState(date.toJSON().slice(0,10).replace(/-/g,'/'))

    const handleDate = (e) => {
        SetDate(e);
        SetCurDate(e.toJSON().slice(0,10).replace(/-/g,'/'));
        
      };
  
    return (
      <div >
        <button variant="primary" className="button" onClick={handleShow}>
            +
        </button>
  
        <Modal id="modal"  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <button className="incomeButton" id="incomeButton" onClick={handleIncome} >Income</button>
                <button className="expenseButton" id="expenseButton" onClick={handleExpense} >Expense</button>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <DatePicker
             selected={date}
             onChange={handleDate}
            />
             
             
          <form>
             <label>Category</label>
              <select value={category} onChange={handleCategory}>
                <option value="Not-Selected">Select...</option>
                <option value="Food">Food</option>
                <option value="Fuel">Fuel</option>
                <option value="Movie">Movie</option>
                <option value="Loan">Loan</option>
                <option value="Medical">Medical</option>
                <option value="Trip">Trip</option>
                <option value="undisclosable">undisclosable</option>
              </select>
          </form>

          <form>
             <label>Division</label>
              <select value={division} onChange={handleDivision}>
                <option value="Not-Selected">Select...</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
          </form>

            <input
            type="text"
            placeholder="Amount"
            className="form-control"
            onChange={handleAmount}
            value={amount} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default PopUp;

//   class Example extends React.Component {
//     state = {
//       startDate: new Date()
//     };
   
//     handleChange = date => {
//       this.setState({
//         startDate: date
//       });
//     };
   
//     render() {
//       return (
//         <DatePicker
//           selected={this.state.startDate}
//           onChange={this.handleChange}
//         />
//       );
//     }
//   }