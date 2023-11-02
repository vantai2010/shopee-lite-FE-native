import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import keyMap from '../../utils/constant/keyMap'
import { handleLoginService, handleRegisterInformations, handleRegisterService, loginWithTokenService } from '../../service/appService'

export const fetchLoginThunk = createAsyncThunk('app/fetchLoginThunk', async (data) => {
    try {
        let response = await handleLoginService(data)
        return response

    } catch (error) {
        console.log(error)
    }
})

export const fetchLoginWithTokenThunk = createAsyncThunk('app/fetchLoginWithTokenThunk', async () => {
    try {
        let response = await loginWithTokenService()
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


export const fetchRegisterInformationThunk = createAsyncThunk('app/fetchRegisterInformationThunk', async (data) => {
    try {
        let response = await handleRegisterInformations(data)
        return response

    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    language: keyMap.VI,
    isLoading: false,
    isLogin: false,
    token: null,
    notifySocket: null,
    numberCart: 0,
    numberNotify: 0,
    userData: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        },
        handleLogout: (state, action) => {
            state.isLogin = false
            state.userData = {}
        },
        handleConnectSocketNotify: (state, action) => {
            state.notifySocket = action.payload
        },
        handleDisConnectSocketNotify: (state, action) => {
            state.notifySocket?.disconnect()
            state.notifySocket = null
        },
        handleChangeNumberCart: (state, action) => {
            state.numberCart = action.payload
        },
        handleChangeNumberNotify: (state, action) => {
            state.numberNotify = action.payload
        },
    },
    extraReducers: {
        [fetchLoginThunk.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchLoginThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userData = action.payload.data
            state.token = action.payload.token
            state.isLogin = true
        },
        [fetchLoginThunk.rejected]: (state, action) => {
            state.isLoading = false
            state.userData = {}
            state.token = null
            state.isLogin = false
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
        [fetchRegisterInformationThunk.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchRegisterInformationThunk.fulfilled]: (state, action) => {
            state.isLoading = false
        },
        [fetchRegisterInformationThunk.rejected]: (state, action) => {
            state.isLoading = false
        },
        [fetchLoginWithTokenThunk.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchLoginWithTokenThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userData = action.payload.data
            state.isLogin = true
        },
        [fetchLoginWithTokenThunk.rejected]: (state, action) => {
            state.isLoading = false
            state.userData = {}
            state.isLogin = false
        },
    }
})


export const { changeLanguage, handleLogout, handleConnectSocketNotify, handleDisConnectSocketNotify, handleChangeNumberCart, handleChangeNumberNotify } = appSlice.actions

export default appSlice.reducer