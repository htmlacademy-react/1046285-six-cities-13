import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { userProcess } from "./user-process/user-process";
import { appProcess } from "./app-process/app-process";
import { dataProcess } from "./data-process/data-process";

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
