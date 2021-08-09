import { connect } from "react-redux"
import { MenuItems } from '../components/MenuItems'

const mapStateToProps = (state) => {
    // object key is our props that we want to pass the state 
    return { items: state.items }
}

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);