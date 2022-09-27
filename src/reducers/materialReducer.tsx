import { createSlice,PayloadAction  } from '@reduxjs/toolkit'
import {materials} from '../data'
import { Material } from '../types'


// const initialState: Material = {
//     Obj_Id: "",
//     Obj_name: "",
//     dimensions: "",
//     unit: "",
//     standard:"",
//     materials: "",
//     remarks: "",
//     mass:0 ,
//     density:0,
//     kg: 0
// }
const initialState: Material[]=[]

const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: {
        getMaterial: (state, action:PayloadAction<string>)=> {
            const material = materials.filter(m => m.Obj_Id.toLowerCase().includes(action.payload.toLowerCase()))
            return material
        },
        initializedMetarial: (_state, action) => {
            return action.payload
        }
    }
})

export const { getMaterial,initializedMetarial} = materialSlice.actions

export default materialSlice.reducer

