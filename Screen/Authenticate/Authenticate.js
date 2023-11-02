import React, { Children, useEffect, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import environment from '../../utils/constant/environment'
import setAuthToken from '../../utils/setAuthToken'
import { unwrapResult } from '@reduxjs/toolkit'
import { fetchLoginWithTokenThunk, handleChangeNumberCart, handleConnectSocketNotify, handleDisConnectSocketNotify } from '../../store/slices/appSlice'
import { connectToNotifySocket } from '../../service/notifySocketService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import namePage from '../../utils/constant/namePage'
import { useRef } from 'react'
import { useState } from 'react'
import { getNumberCartService } from '../../service/appService'

export const MyContext = createContext();


export default function Authenticate({ children }) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const loadUser = async () => {
        let nameLocalStore = environment.KEY_TOKEN_STORE
        let token = await AsyncStorage.getItem(nameLocalStore)
        if (token) {
            setAuthToken(token)
        }
        try {
            let response = await dispatch(fetchLoginWithTokenThunk())
            let data = unwrapResult(response)
            if (data && data.errCode === 0) {
                navigation.navigate(namePage.HOME)
                let notifySocketServer = await connectToNotifySocket()
                dispatch(handleConnectSocketNotify(notifySocketServer))
                let responseGetNumberCart = await getNumberCartService()
                if (responseGetNumberCart && responseGetNumberCart.errCode === 0) {
                    dispatch(handleChangeNumberCart(responseGetNumberCart.data))
                }
            } else {
                setAuthToken(null)
                dispatch(handleDisConnectSocketNotify())
                await AsyncStorage.removeItem(nameLocalStore)
            }
        } catch (error) {
            console.log('loi authentica: ', error)
            dispatch(handleDisConnectSocketNotify())
            setAuthToken(null)
            await AsyncStorage.removeItem(nameLocalStore)
        }
    }

    useEffect(() => {
        loadUser()
        return () => {
            dispatch(handleDisConnectSocketNotify())

        }
    }, [])



    return (
        <>

            {children}

        </>
    )
}
