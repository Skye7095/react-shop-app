import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    console.log(thunkAPI)
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log("@@@", response)
      console.log("aaa")
      return response.data
      
    }catch (error) {
      console.log("bbb")
      thunkAPI.rejectWithValue("Error loading products")
    }
  }
)

const initialState = {
  products: [],
  isLoading: false,
  error: ''
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  // reducer를 추가하면 프로미스의 진행 상태에 따라서 reducer를 실행할 수 있습니다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer
