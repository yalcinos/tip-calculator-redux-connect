import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {NewItemForm} from '../components/NewItemForm'
import { addNewItem } from '../store/items/actions'

//it will pass empty object for statetoProps, it will pass dispatch  as proptoobject


// const mapDispatchToProps = {
//     onSubmit: (name, price) => addNewItem(name, price)
// }

const mapDispatchToProps = (dispatch) => {
    //secondway to pull actions and maptoprop
    // return bindActionCreators({
    //     onSubmit: (name, price) => addNewItem(name, price) 
    // }, dispatch)
    return {
        onSubmit: (name, price) => dispatch(addNewItem(name, price)) 
    }  
}
export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm)