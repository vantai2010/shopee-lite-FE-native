import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import keyMap from '../../utils/constant/keyMap'
import { handleLoginService, handleRegisterService } from '../../service/appService'

export const fetchLoginThunk = createAsyncThunk('app/fetchLoginThunk', async (data) => {
    try {
        let response = await handleLoginService(data)
        return response

    } catch (error) {
        console.log(error)
    }
})


export const fetchRegisterThunk = createAsyncThunk('app/fetchRegisterThunk', async (data) => {
    try {
        let response = await handleRegisterService(data)
        return response

    } catch (error) {
        console.log(error)
    }
})


const initialState = {
    language: keyMap.VI,
    isLoading: false,
    isLogin: false,
    userData: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    },
    extraReducers: {
        [fetchLoginThunk.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchLoginThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userData = action.payload.data
        },
        [fetchLoginThunk.rejected]: (state, action) => {
            state.isLoading = false
            state.userData = {}
        },
        [fetchRegisterThunk.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchRegisterThunk.fulfilled]: (state, action) => {
            state.isLoading = false
        },
        [fetchRegisterThunk.rejected]: (state, action) => {
            state.isLoading = false
        },
    }
})


export const { changeLanguage, } = appSlice.actions

export default appSlice.reducer