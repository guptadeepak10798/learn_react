import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
// function Expenses(expenses){
    const Expenses = (expenses) =>{
    console.log(expenses)
    console.log(expenses.item[0].id)
    console.log(expenses.item[0])
    console.log("======")
    return(
        <div className='expenses'>

            {
                expenses.item.map(
                    exp =>(
                        <ExpenseItem  
                        date = {exp.date} 
                        title = {exp.title} 
                        amount = {exp.amount}
                        Id = {exp.id}
                        key = {exp.id}
                        />
                    )
                )
                
            }
            {/* <ExpenseItem  
            date = {expenses.item[0].date} 
            title = {expenses.item[0].title} 
            amount = {expenses.item[0].amount}
            /> 
            <ExpenseItem  
            date = {expenses.item[1].date} 
            title = {expenses.item[1].title} 
            amount = {expenses.item[1].amount}
            />
            <ExpenseItem  
            date = {expenses.item[2].date} 
            title = {expenses.item[2].title} 
            amount = {expenses.item[2].amount}
            />
            <ExpenseItem  
            date = {expenses.item[3].date} 
            title = {expenses.item[3].title} 
            amount = {expenses.item[3].amount}
            /> */}
        </div>
    );
}

export default Expenses;

