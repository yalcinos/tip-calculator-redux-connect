import { connect } from 'react-redux'
import {MenuItem} from '../components/MenuItem'
import { removeAddedItem, updateItemPrIce, updateQuantity } from '../store/items/actions'
import { selectItemTotal } from '../store/items/selectors'


const mapStateToProps = (state, props) => ({
    total: selectItemTotal (state, props)
})
const mapDispatchToProps = (dispatch,ownProps) => {
    console.log({ownProps})
    return { 
        remove: () => dispatch(removeAddedItem(ownProps.uuid)),
        updatePrice: (price) => dispatch(updateItemPrIce(ownProps.uuid, price)),
        updateQuantity: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity))
    }

}
export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem)