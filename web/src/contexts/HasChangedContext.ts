import { createContext } from "react";

interface HasChangedContext {
  hasChanged: boolean;
  setHasChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criação do contexto
const HasChangedContext = createContext<HasChangedContext | undefined>(undefined);

export default HasChangedContext;