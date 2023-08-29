import { appProcess } from "./app-process";
import { CITIES } from "../../const";
import { DefaultCity } from "../../const";

describe('AppProccess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: {
        "name": "Moscow",
        "location": {
        "latitude": 55.644466,
        "longitude": 37.395744,
        "zoom": 8
      }},
      error: null
    };

    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES.find((city) => city.name === DefaultCity.name),
      error: null,
    };

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
