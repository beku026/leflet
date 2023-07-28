import { configureStore } from '@reduxjs/toolkit';
import RoutesSlice from '../reducers/RouteReducer'
import SelectedRouteSlice from '../reducers/selectedRouteReducer'



export const store = configureStore({
  reducer: {
    routes: RoutesSlice,
    selectedRoute: SelectedRouteSlice,
  },
});

