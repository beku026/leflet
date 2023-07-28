import { createSlice } from '@reduxjs/toolkit';

const RoutesSlice = createSlice({
  name: 'routes',
  initialState: [],
  reducers: {
    setRoutes: (state, action) => action.payload,
  },
});

export const { setRoutes } = RoutesSlice.actions;
export default RoutesSlice.reducer;
