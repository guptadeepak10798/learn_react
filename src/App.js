// import ExpenseItem from './components/ExpenseItem';
//parent component
import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

let DUMMY_EXPENSE = [
    {
        id:'e1',
        title : 'School Fee',
        amount : 250,
        date : new Date(2021,5,12)
    },
    {
        id:'e2',
        title : 'House rent',
        amount : 3050,
        date : new Date(2022,5,12)
    },
    {
        id:'e3',
        title : 'Book',
        amount : 210,
        date : new Date(2021,7,10)
    },
    {
        id:'e4',
        title : 'Food',
        amount : 2500,
        date : new Date()
    }

];

// function App(){
    const  App = () =>{

    // let expenseDate = new Date();
    // let expenseTitle = 'School Fee';
    // let expenseAmout = 300;

    //array of objects
    // let expenses = [
    //     {
    //         id:'e1',
    //         title : 'School Fee',
    //         amount : 250,
    //         date : new Date(2021,5,12)
    //     },
    //     {
    //         id:'e2',
    //         title : 'House rent',
    //         amount : 3050,
    //         date : new Date(2022,5,12)
    //     },
    //     {
    //         id:'e3',
    //         title : 'Book',
    //         amount : 210,
    //         date : new Date(2021,7,10)
    //     },
    //     {
    //         id:'e4',
    //         title : 'Food',
    //         amount : 2500,
    //         date : new Date()
    //     }

    // ];

    const [expenses,setExpenses]= useState(DUMMY_EXPENSE);
    const addExpenseHandler =(expense)=>{
        const updatedExpense = [expense,...expenses]
        
        setExpenses(updatedExpense);
        console.log(expense)
        console.log(expenses)
    }

    
    return (
        <div>
            <h2>Expense Reimbusement</h2>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            {/* <ExpenseItem 
                date = {expenseDate} 
                title = {expenseTitle} 
                amount = {expenseAmout}
            /> */}
            
            <Expenses item ={expenses}/>
            
        </div>   
    ) ;
}

export default App;