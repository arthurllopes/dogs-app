import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Token from "./Token";
import Login from './Login'
import Photo from "./Photo";
import Feed from "./Feed";
import Interface from "./Interface";

const reducer = combineReducers({ Token, Login, Photo, Feed, Interface})
const store = configureStore({reducer})

export default store;
