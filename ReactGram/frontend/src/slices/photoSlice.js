import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import photoService from "../services/photoService";
import PhotoService from '../services/photoService'

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success:false,
  loading:false,
  message:null
}
//funções
//publish user photo
export const publishPhoto = createAsyncThunk(
  "photo/publish",
  async(photo,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token


    const data = await photoService.publishPhoto(photo,token)

    //check for erros
    if(data.errors){
      return thunkAPI.rejectWithValue(data.errors[0])
    }
    return data
  }
)

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
        state.photos =
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
  }
})

export const {resetMessage} = photoSlice.actions
export default photoSlice.reducer