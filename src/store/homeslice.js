import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home', 
  initialState: {
    url: { },
    genres: {}
  },

  reducers: {
    /*
    getApiConfigurations: function
    state: is the initial state of the store's slic
    action: is the getApiConfigurations function.
    action.payload: is the payload of the action brought.
    */
    getApiConfiguration: (state, action) =>{
       state.url = action.payload
    },
    getGenres: (state, action) =>{
       state.genres = action.payload
    },
    
  }
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer;