import React from 'react'
import './ExpenseList.css';
import ExpenseDate from './ExpenseDate';

function ExpenseList(props){
    return (
        <div className="expense-item">
            <div>         
            <div className="expense-item__description">
            <ExpenseDate date={props.date} />
                <h2 className="expense-item__description h2">{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
        </div>
    );
}
export default ExpenseList;