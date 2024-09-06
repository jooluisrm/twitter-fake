import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { IconeInput } from "./Icones-Input";
import { Button } from "@/components/ui/button";
import { PostModelo } from "@/components/Posts/Posts-modelo";
import { useContext, useEffect, useState } from "react";
import { Posts } from "@/data/posts";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Post } from "@/types/postsType";
import { ContextPost } from "@/components/Context/ContextPost";



export const STORAGE_KEY = 'postListCache';


export const ConteudoHome = () => {


    const ctx = useContext(ContextPost); // Chamando um context dos meus posts

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(ctx?.listaMeusPosts));
        }
    }, [ctx?.listaMeusPosts]);

    const [listaPosts2, setListaPosts2] = useState<Post[]>([...Posts]);


    const [novoPost, setNovoPost] = useState('');
    const { toast } = useToast();
    const [carregando, setCarregando] = useState(false);




    useEffect(() => {
        setCarregando(true);
        setTimeout(() => {
            setCarregando(false);
        }, 0)
    }, [])

    const verificarEntrada = (input: string) => {
        const inputTrim = input.trim();

        if (inputTrim === '') {
            return true;
        } else {
            return false;
        }

    }

    const AddPost = () => {
        if (verificarEntrada(novoPost)) {
            return true;
        } 

        if (novoPost.length === 0) {
            return toast({
                title: 'Não foi possivel fazer a publicação!',
                description: 'Preencha campo para continuar...',
                action: <ToastAction altText="fechar">Fechar</ToastAction>
            });
        };
        const getCurrentDate = (): string => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0'); // Pega o dia e garante dois dígitos
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Pega o mês (lembrando que os meses começam do 0)
            const year = date.getFullYear(); // Pega o ano

            return `${year}-${month}-${day}`; // Formata a data no padrão Ano-Mês-Dia
        };
        setCarregando(true);

        ctx?.setListaMeusPosts([
            {
                id: ctx.listaMeusPosts.length + 1,
                nome1: 'João Luis',
                nome2: '@jao.luisrm_',
                inicial: 'JL',
                data: getCurrentDate(),
                conteudo: novoPost,
                img: 'https://avatars.githubusercontent.com/u/124599?v=4',
                datas: {
                    comentarios: 0,
                    republicacao: 0,
                    likes: 0,
                    viws: 0,
                    compartilhamentos: 0
                }
            }, ...ctx.listaMeusPosts]);

        toast({
            title: 'Post postado com sucesso!',
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        });

        setTimeout(() => setCarregando(false), 0);
        setNovoPost('');
    }

    const AddPostEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (verificarEntrada(novoPost)) {
            return true;
        } 

        if (event.key === "Enter" && !carregando) {
            if (novoPost.length === 0) {
                return toast({
                    title: 'Não foi possivel fazer a publicação!',
                    description: 'Preencha campo para continuar...',
                    action: <ToastAction altText="fechar">Fechar</ToastAction>
                });
            };
            const getCurrentDate = (): string => {
                const date = new Date();
                const day = String(date.getDate()).padStart(2, '0'); // Pega o dia e garante dois dígitos
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Pega o mês (lembrando que os meses começam do 0)
                const year = date.getFullYear(); // Pega o ano

                return `${year}-${month}-${day}`; // Formata a data no padrão Dia-Mês-Ano
            };
            setCarregando(true);

            ctx?.setListaMeusPosts([
                {
                    id: ctx.listaMeusPosts.length + 1,
                    nome1: 'João Luis',
                    nome2: '@jao.luisrm_',
                    inicial: 'JL',
                    data: getCurrentDate(),
                    conteudo: novoPost,
                    img: 'https://avatars.githubusercontent.com/u/124599?v=4',
                    datas: {
                        comentarios: 0,
                        republicacao: 0,
                        likes: 0,
                        viws: 0,
                        compartilhamentos: 0
                    }
                }, ...ctx.listaMeusPosts]);

            toast({
                title: 'Post postado com sucesso!',
                action: <ToastAction altText="fechar">Fechar</ToastAction>
            });

            setTimeout(() => setCarregando(false), 0);
            setNovoPost('');
        }
    }

    return (
        <div>

            <div className="border border-t-0 border-l-0 border-r-0 py-3 px-3">
                <div className="flex gap-3">
                    <Avatar className="flex-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <Input
                        value={novoPost}
                        onKeyDown={AddPostEnter}
                        onChange={e => setNovoPost(e.target.value)}
                        className="flex-1 border-0  focus-visible:ring-0 text-lg"
                        placeholder="Oque está acontecendo?">
                    </Input>
                </div>
                <div className="flex justify-between pt-5">
                    <IconeInput></IconeInput>
                    <Button disabled={carregando || verificarEntrada(novoPost)} onClick={AddPost} className="rounded-full font-bold">Postar</Button>
                </div>
            </div>
            {carregando &&
                <div className="flex justify-center py-2">
                    <div className="border border-t-0 border-r-0 w-6 h-6 rounded-full border-white border-b-2 border-l-2 animate-spin">
                    </div>
                </div>
            }

            {!carregando && ctx?.listaMeusPosts.map(post => (
                <PostModelo
                    key={post.id}
                    item={post}
                />
            ))}
            {!carregando && listaPosts2.map(post => (
                <PostModelo
                    key={post.id}
                    item={post}
                />
            ))}



        </div>

    );
}