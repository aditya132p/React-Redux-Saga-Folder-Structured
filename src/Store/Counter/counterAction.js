 const incrementAction = () => {
    return ({
        type: "CLICK_TO_INCREMENT",
    })

}
 const sagaIncrementAction = () => {
    return ({
        type: "SAGA_CLICK_TO_INCREMENT",
    })

}
 const decrementAction = () => {
    return ({
        type: "CLICK_TO_DECREMENT",
    })

}
 const sagaDecrementAction = () => {
    return ({
        type: "SAGA_CLICK_TO_DECREMENT",
    })

}

export { incrementAction,sagaIncrementAction , decrementAction, sagaDecrementAction}