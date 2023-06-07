import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { FaTimesCircle, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext)

    const handleDeleteItem = () => {

        console.log("in handleDeleteItem ", props.name)
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        })
    }

    const handleIncreaseItemBudget = () => {
        const item = {
            name: props.name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item
        })
    }

    const handleReduceItemBudget = () => {
        const item = {
            name: props.name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: item
        })
    }

    return (
        <tr >
            <td > {props.name} </td>
            <td >{currency} {props.cost} </td>
            <td > <FaPlusCircle size='1.5em' color="green" onClick={handleIncreaseItemBudget} > </FaPlusCircle > </td >
            <td > <FaMinusCircle size='1.5em' color="red" onClick={handleReduceItemBudget} > </FaMinusCircle > </td >
            <td > <FaTimesCircle size='1.2em' color="grey" onClick={handleDeleteItem} > </FaTimesCircle > </td >
        </tr>
    )
}

export default ExpenseItem
