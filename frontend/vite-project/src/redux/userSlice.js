import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    // gia tri ban dau, khi vao trang
    initialState:{
        name: "Nhien",
        age:"22",
        about:"I`m a software engineer",
        avaUrl:
            "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a"
    },
    // chua cac function nho hanh dong voi initalstate
    reducers:{
        // state.name: name,age,about... trong intitalstate
        // action.payload.name la hanh dong ban muon lam voi cac gia tri trong InittalState ( gia tri ban ngoai truyen vao)
        update:(state,action)=>{
            state.name= action.payload.name;
            state.age = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
        }
    }
        

    
});