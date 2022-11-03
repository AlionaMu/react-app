/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, useContext} from 'react';

export type GlobalContent = {
  cardsList: any[]
  setCardsList:(c: any) => void
  formsList: any[]
  setFormsList:(c: any) => void
}

export const GlobalContext = createContext<GlobalContent>({
  cardsList: [], 
  formsList: [], 
  setCardsList: () => {}, 
  setFormsList: () => {}, 
 })
 export const useGlobalContext = () => useContext(GlobalContext);
