import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { AppProcess } from "../../types/state";
import { CITIES } from "../../const";
import { DefaultCity } from "../../const";
import { City } from "../../types/offer";

const initialState: AppProcess = {
  city: CITIES.find((city) => city.name === DefaultCity.name) as City,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = CITIES.find((city) => city.name === action.payload) as City;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { changeCity, setError } = appProcess.actions;
