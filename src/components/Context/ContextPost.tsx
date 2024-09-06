import { Post } from "@/types/postsType";
import { createContext, ReactNode, useState } from "react";
import { STORAGE_KEY } from "../Tabela-Inicial/Home/Conteudo-home";

type TypeContext = {
    listaMeusPosts: Post[];
    setListaMeusPosts: (e: Post[]) => void;
}


export const ContextPost = createContext<TypeContext | null>(null);

type Props = { children: ReactNode }

export const ContextProvider = ({ children }: Props) => {



    const [listaMeusPosts, setListaMeusPosts] = useState<Post[]>(() => {
        if (typeof window !== "undefined") {
            // Acessa o localStorage apenas se estiver no lado do cliente
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        }
        return []; // Retorna array vazio no lado do servidor
    });

    return (
        <ContextPost.Provider value={{ listaMeusPosts, setListaMeusPosts }}>
            {children}
        </ContextPost.Provider>
    );
}
