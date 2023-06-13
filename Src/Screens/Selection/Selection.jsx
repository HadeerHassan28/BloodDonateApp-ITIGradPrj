import React, { useRef, useState } from 'react';
import styles from './Selection.module.css'
import {BsHospital} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Selection = ({onSelection}) => {

    const optionOne = useRef()
    const optionTwo = useRef()

    const [isOptionOneSelected , setIsOptionOneSelected] = useState(false)
    const [isOptionTwoSelected , setIsOptionTwoSelected] = useState(false)


    const toggleSelection = () => {
        onSelection(false)

    }

    const handleOptionOne = () => {

        if(!isOptionOneSelected && isOptionTwoSelected){
            optionOne.current.style.border = "2px solid #ee394a "
            optionTwo.current.style.border = "none"
            setIsOptionOneSelected(true)
            setIsOptionTwoSelected(false)
        }
        else if(!isOptionOneSelected){
            optionOne.current.style.border = "2px solid #ee394a "
            setIsOptionOneSelected(true)
        }
    }


    const handleOptionTwo = () => {
        if(!isOptionTwoSelected && isOptionOneSelected ){
            optionTwo.current.style.border = "2px solid #ee394a"
            optionOne.current.style.border = "none"

            setIsOptionOneSelected(false)
            setIsOptionTwoSelected(true)
        }
        else if(!isOptionTwoSelected){
            optionTwo.current.style.border = "2px solid #ee394a"
            setIsOptionTwoSelected(true)
        }
    }

    return (
        <>
        <div className={styles.overlay} onClick={toggleSelection}></div>
        <div className={`${styles.selection} w-75 `}>
            <div className="container">
            <h2 className='mb-4'>Choose Your Plan</h2>
                <div className="row mb-5">
                    <div className={`${styles.option} col-lg-6 rounded`} onClick={handleOptionOne} ref={optionOne} >
                       <h4>Organization</h4>
                        <BsHospital size={64} color='#ee394a'/>
                        <p>This Plan Include Hospitals and Blood Banks</p>
                        {isOptionOneSelected && <span className='text-danger'>* Your are Following the Organizational Plan</span>}

                    </div>
                    <div className={`${styles.option} col-lg-6 rounded`} onClick={handleOptionTwo} ref={optionTwo} >
                        <h4>User</h4>
                        <AiOutlineUser size={64} color='#ee394a '/>
                        <p>This Plan Include Donors and recipients</p>
                        {isOptionTwoSelected && <span className='text-danger'>* Your are Following the Users Plan</span>}
                     </div>
                    </div>

  
                    {isOptionOneSelected &&  
                    <div className='buttons d-flex justify-content-end'>
                    <button className='btn btn-secondary px-4 py-2' onClick={toggleSelection} >Cancel</button>

                    <Link to="signup-org"> <button className='btn btn-danger px-4 py-2 ms-3'>Sign Up</button></Link>
                    </div> }

                    {isOptionTwoSelected && <div className='buttons d-flex justify-content-end'>
                    <button className='btn btn-secondary px-4 py-2' onClick={toggleSelection}>Cancel</button>

                    <Link to="signup-user"> <button className='btn btn-danger px-4 py-2 ms-3'>Sign Up</button></Link>
                    </div> }


 
                </div>
        </div>
        </>
    );
}

export default Selection;
