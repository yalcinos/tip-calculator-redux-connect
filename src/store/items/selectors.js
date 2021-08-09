import { createSelector } from "reselect";
// create selector takes two argument => 1. array of functions, a function to pass the results of all the result to compute the new value  

export const selectItem = (state, props) => {
    return state.items.find((item) => item.uuid === props.uuid)
} 

export const selectItemTotal =  createSelector(selectItem, item => item.price * item.quantity)

//create function in order to prevent changing the state all over the other files if the state tree is updated someway. 
export const selectItems = state => state.items;
export const selectTipPercentage = state => state.tipPercentage

//we don't need to calculate subtotal unless existing state is changed.
export const selectSubTotal = createSelector([selectItems], items => 
    items.reduce((sum, item) => sum + (item.price * item.quantity),0))

export const selectTipAmount = createSelector([selectSubTotal, selectTipPercentage],
    (subtotal, tipPercentage) => subtotal * (tipPercentage / 100))

// selectSubTotal, selectTipAmount is same as previous one, it will return always the same value
export const selectTotal = createSelector([selectSubTotal,selectTipAmount], 
    (subtotal, tipAmount) => subtotal + tipAmount)