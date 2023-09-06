import { createContext } from "react";
import { Items } from "../pages/RootLayout";

// Criação do contexto
const ItemsContext = createContext<Items[]>([]);

export default ItemsContext;