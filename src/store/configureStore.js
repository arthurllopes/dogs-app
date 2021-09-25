import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Token from "./Token";
import Login from './Login'

const reducer = combineReducers({ Token, Login })
const store = configureStore({reducer})

export default store;
