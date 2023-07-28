import { createSlice } from '@reduxjs/toolkit';

const SelectedRouteSlice = createSlice({
  name: 'selectedRoute',
  initialState: [
    [59.83567701, 30.38064206],
    [59.84660392, 30.29496392], 
    [59.82761295, 30.41705607]
  ],
  reducers: {
    setSelectedRoute: (state, action) => action.payload,
  },
});

export const { setSelectedRoute } = SelectedRouteSlice.actions;
export default SelectedRouteSlice.reducer;