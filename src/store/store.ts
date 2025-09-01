import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../features/menu/menuSlice'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

interface ImportMetaEnv {
    VITE_SUPABASE_URL: string;
    VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
export interface EnvConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export const envConfig: Readonly<EnvConfig> = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

export const supabase: SupabaseClient = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
