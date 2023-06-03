
import {useContext,  useState} from 'react';
import {AppContext} from '../context/AppContext';
const divStyle = {
    
     display: 'flex' ,
    'flex-wrap': 'wrap',
    'flex-direction': 'row'  ,
    
  };

const Budget = () => {
    const {expenses, currency, budget} = useContext(AppContext)
    console.log("Initial valu of budget is " ,budget )
    const[budget_new, setBudget_new] = useState(budget)
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += (item.cost))
    }, 0)
    const updateBudget_new = (newvalue)=>
    {
         
        setBudget_new(previousState => {
            return { ...previousState, budget: newvalue }
          });
    }    

    return (
        <div style={divStyle}>
        <div className='alert alert-secondary' style={{'flex-basis': '25%', margin: '2px'}}>
        <span> Budget: {currency}
        <input
        required='required'
        type='number'
        id='budget_new'
        step="10"
        value={budget_new}
        style={{size: 8, width: '100px'}}
        onChange={(event)=> updateBudget_new(event.target.value)} >
        </input>

        </span >
        </div >
        <div className='alert alert-success' style={{'flex-basis': '25%', margin: '2px'}}>
        <span> Remaining: {currency}{budget - totalExpenses} </span >
        </div >
        <div className='alert alert-primary' style={{'flex-basis': '25%',margin: '2px'}}>
        <span> Spent so far: {currency}{totalExpenses} </span >
        </div >
        <div className='alert alert-success' style={{'flex-basis': '23%',margin: '2px' }}>
        <span > Currency: {currency}{totalExpenses} </span >
        </ div >
        </ div >
    )
}

export default Budget