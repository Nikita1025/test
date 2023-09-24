import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector} from 'react-redux'

import {appApi} from "./appApi";
import {appReducer} from "./appSlice";

const rootReducer = combineReducers({
    [appApi.reducerPath]: appApi.reducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([appApi.middleware]),
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
