import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name : "transactions",
    initialState : {
        allTransactions : [],
        edit : {
            transaction : {},
            editMode : false,
        }
    },

    reducers : {
        // delete

        remove : (state , action) => {
            return{
                ...state,
                allTransactions : state.allTransactions.filter((item) => item.id !== action.payload)
            }
        },

        // add


        add : (state , action) => {
            return{
                ...state,
                allTransactions : [action.payload , ...state.allTransactions]
            }
        },
        // edit

        edit: (state , action) => {
            return{
                ...state,
                edit : {
                    transaction : action.payload,
                    editMode : true,
                }
            }
        },

        // update

        update : (state , action) => {
            return{
                ...state,
                allTransactions : state.allTransactions.map((item) => item.id === action.payload.id ? action.payload : item),
                edit : {
                    transaction : {},
                    editMode : false
                }
            }
        }
    }

});

export const {remove , add , edit , update } = transactionsSlice.actions;
export default transactionsSlice.reducer;