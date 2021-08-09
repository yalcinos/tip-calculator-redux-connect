export const  ITEM_ADDED = 'ADDED_ITEM';
export const REMOVED_ITEM = 'REMOVED_ITEM';
export const ITEM_PRICE_UPDATED = 'UPDATED_PRICE';
export const ITEM_QUANTITIY_UPDATED = 'UPDATED_QUANTITY';

export const addNewItem = (name, price) => ({
    type: ITEM_ADDED, 
    payload: {
        name,
        price
    }
})

export const removeAddedItem = (uuid) => ({
    type: REMOVED_ITEM, 
    payload: {
       uuid
    }
})

export const updateItemPrIce = (uuid, price) => ({
    type: ITEM_PRICE_UPDATED, 
    payload: {
       uuid,
       price
    }
})

export const updateQuantity = (uuid,quantity) => ({
    type: ITEM_QUANTITIY_UPDATED, 
    payload: {
        uuid,
        quantity
    }
})