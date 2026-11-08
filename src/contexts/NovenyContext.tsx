import { createContext, type ReactNode, useContext, useState } from "react";
import {
  novenylista as eredetilista,
  type NovenyTipus,
  type UjNoveny,
} from "../data/novenyek";

interface NovenyekContextValue {
  novenylista: NovenyTipus[];
  torol: (id: number) => void;
  hozzaad: (noveny: UjNoveny) => void;
  modosit: (id: number) => void;
}

export const NovenyContext = createContext<NovenyekContextValue | undefined>(
  undefined,
);

interface NovenyProviderProps {
  children: ReactNode;
}

export function NovenyProvider({ children }: NovenyProviderProps) {
  const [novenylista, setNovenyLista] = useState<NovenyTipus[]>(eredetilista);

  function torol(id: number) {
    console.log("torol");
  }

  function hozzaad(noveny: UjNoveny) {
    console.log(noveny);
  }

  function modosit(id: number) {
    console.log("modosit");
  }

  return (
    <NovenyContext.Provider value={{ novenylista, torol, hozzaad, modosit }}>
      {children}
    </NovenyContext.Provider>
  );
}

export function useNovenyContext() {
  const context = useContext(NovenyContext);
  if (context === undefined) {
    throw new Error("Provideren belül...");
  }
  return context;
}
