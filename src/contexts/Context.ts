import { createContext } from "react";
import { type ItemsContextType, type SelectedItemsContextType, type GlobalStorageContextType, type PostsContextType} from "../types/types";

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const selectedItemsContext = createContext<SelectedItemsContextType | undefined>(undefined)

export const GlobalStorageContext = createContext<GlobalStorageContextType | undefined > (undefined)

export const postsContext = createContext<PostsContextType | undefined>(undefined)

