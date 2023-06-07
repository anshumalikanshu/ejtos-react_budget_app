
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const divStyle = {

    display: 'flex',
    'flex-wrap': 'wrap',
    'flex-direction': 'row',

};
const dd_toggleStyle = {
    'background-color': '#93E499',
    color: '#ffffff'
}
const dd_menu = {
    'background-color': '#93E499'
}


const Budget = () => {

    const { expenses, currency, budget } = useContext(AppContext)
    console.log("Initial valu of budget is ", budget)
    const { dispatch } = useContext(AppContext)

    const currencyInfo = [
        { 'id': '$', 'text': '$ Dollar' },
        { 'id': '£', 'text': '£ Pound' },
        { 'id': '€', 'text': '€ Euro' },
        { 'id': '₹', 'text': '₹ Rupee' }];

    let curr = currencyInfo.filter(c => c.id === currency);
    let currText = curr[0]?.text;


    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost))
    }, 0)

    const changeCurrency = (newvalue) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newvalue,
        })
    }

    const updateBudget_new = (newvalue) => {

        console.log("in updateBudget_new vlaue of newvalue is ", newvalue);

        if (newvalue > 20000) {
            alert(" The budget can not exceed 20000");
            return false;
        }
        else if (newvalue < totalExpenses) {
            alert(" You can not reduce the budget value lower than the spending " + newvalue);
            return false;

        }
        else {

            dispatch({
                type: 'SET_BUDGET',
                payload: newvalue,
            })

        }



    }

    return (
        <div style={divStyle}>
            <div className='alert alert-secondary' style={{ 'flex-basis': '25%', margin: '2px' }}>
                <span> Budget: {currency}
                    <input
                        required='required'
                        type='number'
                        id='budget'
                        step="10"
                        value={budget}
                        style={{ size: 8, width: '100px' }}
                        onChange={(event) => updateBudget_new(event.target.value)} >
                    </input>

                </span >
            </div >
            <div className='alert alert-success' style={{ 'flex-basis': '25%', margin: '2px' }}>
                <span> Remaining: {currency}{budget - totalExpenses} </span >
            </div >
            <div className='alert alert-primary' style={{ 'flex-basis': '25%', margin: '2px' }}>
                <span> Spent so far: {currency}{totalExpenses} </span >
            </div >

            <div style={{ 'flex-basis': '23%', margin: '2px' }}>


                <div class="dropdown" id="currency">
                    <button class="btn btn-secondary  dropdown-toggle"
                        type="button" data-toggle="dropdown" style={dd_toggleStyle} > Currency({currText})
                        <span class="caret"></span></button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2" style={dd_menu}>

                        {currencyInfo.map((currencyDic) => (
                            <button class="dropdown-item"
                                type="button" onClick={() => changeCurrency(currencyDic.id)}> {currencyDic.text}</button>
                        ))
                        }
                    </div>
                </div>

            </ div >
        </ div >
    )
}

export default Budget