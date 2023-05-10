import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// import { useState } from 'react';


// import App from '../App';
// function ExpenseItem(props){
    const ExpenseItem = (props) =>{
        console.log(props);
        console.log(props.date);
        console.log(props.Id);
        // console.log(props.id);
        // let title = props.title;
        // const [title,setTitle] =useState(props.title);
        // const [newTitle,setNewTitle] =useState("");

        // const clickHandler = () =>{
        //     // alert("Hey!!, I'm clicked ")
        //     // title = 'new title';
        //     // console.log(title);
        //     // setTitle("New title....");
        //     setTitle(newTitle)
        // }

        // const changeHandler = (event) =>{
        //     setNewTitle(event.target.value)
        // }
    // console.log(props)
    // console.log(props)
    // const year = props.date.getFullYear();
    // const month = props.date.toLocaleString('en-US',{month : "long"})
    // const date = props.date.toLocaleString('en-US',{day : "2-digit"})
    return(
        
        <div className='expense-item'>
            {/* <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div> */}
            <ExpenseDate date = {props.date}/>
            {/* <div className='date1'>{props.date.toISOString()}</div> */}
            <div className='expense-item__description'>
                <h2>{props.title}
                 {/* {"ID :"+props.Id} */}
                 </h2>
                {/* <h2>{ title}</h2> */}
                {/* <h2>{title}</h2> */}
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type= "text" placeholder='Change title' value = {newTitle} onChange ={ changeHandler }/>
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItem;
