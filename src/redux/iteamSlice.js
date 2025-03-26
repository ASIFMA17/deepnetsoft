import { createSlice } from "@reduxjs/toolkit" ;

const initialState = {
    iteam: null,
    // isAthenticated : false,
}

const iteamSlice = createSlice({
    name: "iteam slice",
    initialState,
    reducers: {
        setIteam: function (state, actions) {     //set state method defined
            state.iteam = actions.payload;
            // state.isAthenticated = true ;
        },
        updateIteam: function (state , actions) {   //update state method defined
            state.iteam = actions.payload;
            // console.log(actions.payload);
        }
    }
});


export const { setIteam , updateIteam  } = iteamSlice.actions;

export default iteamSlice.reducer;