import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserWT} from "../../models/IUserWT.ts";

type UserSliceType = {
    isLogged: boolean;
    user: IUserWT | null;
}

const initialState = {isLogged: false, user: null};

export const userSlice = createSlice({
    name: 'UserSlice', initialState: initialState,
    reducers:{
        changeInfo: (state, action: PayloadAction<boolean>)=> {
            state.isLogged = action.payload

        }
    }

})