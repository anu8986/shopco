import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    product: []
};
const productSlice = createSlice({
    name: 'moreproduct',
    initialState,
    reducers: {
        selectedmoreproduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const { selectedmoreproduct } = productSlice.actions
export default productSlice.reducer