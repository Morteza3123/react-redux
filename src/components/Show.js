import React , { useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators} from '../state/index'



function Show() {
    const [value, setValue] = useState(0)
    const state = useSelector(state => state.bank)
    const dispatch = useDispatch()

    const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
    
    const addValue = () => {
        
    }
    return (
        <div>
            <h1>Your equality are {state} Dollars</h1>
            <input onChange={e=>setValue(e.target.value)}/>
            <button onClick={()=>depositMoney(Number(value))}>Add</button>

        </div>
    )
}

export default Show
