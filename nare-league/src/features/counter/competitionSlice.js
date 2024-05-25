import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define thunk action creator to fetch competitions data
export const fetchCompetitions = createAsyncThunk(
'competitions/fetchCompetitions',
async () => {
    const response = await axios.get('https://api.betnare.com/v1/categories');
    console.log(response.data);
    return response.data;

}
);

const competitionsSlice = createSlice({
name: 'competitions',
initialState: {
    data: [],
    loading: false,
    error: null,
},
reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchCompetitions.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchCompetitions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(fetchCompetitions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
},
});

export default competitionsSlice.reducer;