import { useDispatch, useSelector } from "react-redux"
import { sagaDecrementAction, sagaIncrementAction } from "../Store/Counter/counterAction"

function Counter() {
    const count = useSelector((state) => state.countValue.counter)
    const countAction = useDispatch()
    return (
        <>
            <div>Counter</div>
            <div>{count}</div>
            <button onClick={() => countAction(sagaIncrementAction())}>+</button>
            <button onClick={() => countAction(sagaDecrementAction())}>-</button>
        </>
    )
}



export default Counter