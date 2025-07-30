import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store.ts"

export interface MenuState {
  toggle: boolean
}

const initialState: MenuState = {
  toggle: true,
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggle: (state) => {
            state.toggle = state.toggle
        },
        setToggle: (state, action: PayloadAction<boolean>) => {
            state.toggle = action.payload
        },
    },
})

export const { toggle, setToggle } = menuSlice.actions
export const selectMenu = (state: RootState) => state.menu.toggle
export default menuSlice.reducer