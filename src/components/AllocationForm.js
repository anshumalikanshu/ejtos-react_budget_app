import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, currency, remaining } = useContext(AppContext)

    const [department, setDepartment] = useState('')
    const [cost, setCost] = useState('')
    const [action, setAction] = useState('Add')


    // console.log(" the remaining amount is ", currency, remaining)
    const submitEvent = () => {

        const item = {
            name: department,
            cost: parseInt(cost),
        }

        // console.log(" in submitEvent the value of department is ", department, " the value of cost is = ", cost, "the value of  action = ", action, "item = ", item)

        if ((cost > remaining) && (action === "Add")) {
            alert(" The Allocation can not exceed the remaining funds of " + currency + " " + remaining)

            // console.log(" The Allocation can not exceed the remaining funds of ", currency, " remaining = ", remaining, " cost = ", cost, " action= ", action)

        } else {
            if (action === "Reduce") {
                dispatch({
                    type: 'RED_EXPENSE',
                    payload: item,
                })
            } else {

                console.log(" in submitEvent add part of if the value of department is ", department, " the value of cost is = ", cost, "the value of  action = ", action)

                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: item,
                })
            }
        }
    }

    return (
        <div>
            <div className='row' >

                <div className="input-group mb-3" style={{ marginLeft: '2rem' }} >
                    <div className="input-group-prepend" >
                        <label className="input-group-text" htmlFor="inputGroupSelect01" > Department </label >
                    </div >
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setDepartment(event.target.value)} >
                        <option defaultValue > Choose... </option >
                        <option value="Marketing" name="Marketing" > Marketing </option >
                        <option value="Finance" name="Finance" > Finance </option >
                        <option value="Sales" name="Sales" > Sales </option >
                        <option value="Human Resource" name="Human Resource" > Human Resource </option >
                        <option value="IT" name="IT" > IT </option >
                    </ select >

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }} >
                        < label className="input-group-text" htmlFor="inputGroupSelect02" > Allocation </label >
                    </ div >
                    < select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)} >
                        < option defaultValue value="Add" name="Add" > Add </option >
                        < option value="Reduce" name="Reduce" > Reduce </option >
                    </select >
                    < span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }} > </span >
                    {currency}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ size: 8, width: '100px' }}
                        onChange={(event) => setCost(event.target.value)} >
                    </ input >

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }} >
                        Save
                    </button >
                </ div >
            </ div >

        </ div >
    )
}

export default AllocationForm


