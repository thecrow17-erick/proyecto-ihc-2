import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface ProductState {
  sexo: string
  talla: string[]
  marca: string
}

interface Actions{
  setSexo: (value: string)=>void
  setTalla: (value: string[])=>void
  setMarca: (value: string)=>void
}

const storeApi :StateCreator<ProductState & Actions> = (set)=>({
  sexo: '',
  talla: [],
  marca: '',
  setSexo: (value: string) => set(({sexo: value})),
  setTalla: (value: string[]) => set(({talla: value})),
  setMarca:(value: string) => set( ({marca: value})),
})




export const usePersonStore = create<ProductState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: 'product-storage', // unique name
        getStorage: () => AsyncStorage, // Add this here!
      }
    )
  )
)

