import { createContext } from "react";
import type { ItemsContextType, SelectedItemsContextType, GlobalStorageContextType} from "../types/types";

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const selectedItemsContext = createContext<SelectedItemsContextType|undefined>(undefined)

export const GlobalStorageContext = createContext<GlobalStorageContextType | undefined > (undefined)

