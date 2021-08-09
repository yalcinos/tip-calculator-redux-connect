import produce from "immer";
import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITIY_UPDATED, REMOVED_ITEM } from "./actions";

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Awsome', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {

  // if(action.type === ITEM_ADDED) {
  //   const item = { uuid: id++, quantity: 1, ...action.payload}
  //   return [...state, item]
  // }

  if(action.type === ITEM_ADDED) { 
   return produce(state, (draftState) => {
      const item = { uuid: id++, quantity: 1, ...action.payload}
      draftState.push(item)
      draftState[1].done = true
    })
  }

  if(action.type === REMOVED_ITEM) {
    return state.filter((item) => item.uuid !== action.payload.uuid)
  }

  // if(action.type === ITEM_PRICE_UPDATED) {
  //    return state.map((item) => {
  //     if(item.uuid === action.payload.uuid) {
  //       return {...item , price: action.payload.price}
  //     }
  //     return item
  //   });
  // }

  if(action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (drafState) => {
      const item = drafState.find((item => item.uuid === action.payload.uuid))
      item.price = parseInt(action.payload.price,10)

    })
 }

  // if(action.type === ITEM_QUANTITIY_UPDATED) {
  //   return state.map((item) => {
  //     if(item.uuid === action.payload.uuid){
  //       return {...item, quantity: action.payload.quantity}
  //     }
  //     return item
  //   })
  // }
  if(action.type === ITEM_QUANTITIY_UPDATED) {
    return produce(state, (drafState) => {
       const item = drafState.find((item) => item.uuid === action.payload.uuid)
       item.quantity = parseInt(action.payload.quantity,10)
    })
  }
 return state 
};

export default reducer;
