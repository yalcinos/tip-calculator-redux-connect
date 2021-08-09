import { connect } from "react-redux";
import { Summary } from '../components/Summary'
import { selectSubTotal, selectTipAmount, selectTotal } from "../store/items/selectors";

export const mapStateToProps = state => {
    const subtotal = selectSubTotal(state)
    const tipAmount = selectTipAmount(state)
    const total = selectTotal(state)
    
    // const items = state.items; 
    // // let subtotal = 0
    // // for(const item of items) {
    // //     subtotal += item.quantity * item.price
    // // }
    // const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    
    // const tipAmount = subtotal * (state.tipPercentage / 100)

    // const total = subtotal + tipAmount

    return {
        subtotal,
        tipAmount,
        total
    }
}
export const SummaryContainer = connect(mapStateToProps)(Summary)