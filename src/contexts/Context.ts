import { createContext } from "react";
import { type GlobalStorageContextType, type PostsContextType} from "../types/types";

export const GlobalStorageContext = createContext<GlobalStorageContextType | undefined > (undefined)

export const postsContext = createContext<PostsContextType | undefined>(undefined)

