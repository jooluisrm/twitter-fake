import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { IconeInput } from "./Icones-Input";
import { Button } from "@/components/ui/button";
import { PostModelo } from "@/components/Posts/Posts-modelo";
import { useState } from "react";
import { Posts } from "@/data/posts";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";




export const ConteudoHome = () => {

    const [listaPosts, setListaPosts] = useState([...Posts]);
    const [novoPost, setNovoPost] = useState('');
    const { toast } = useToast()
    const [carregando, setCarregando] = useState(false);

    const Addpost = () => {
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
        setTimeout(() => setListaPosts([{
            id: listaPosts.length + 1,
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
        }, ...listaPosts]), 1500);
        toast({
            title: 'Post postado com sucesso!',
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        });
        
        setTimeout(() => setCarregando(false), 1500);





        setNovoPost('');
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
                        onChange={e => setNovoPost(e.target.value)}
                        className="flex-1 border-0  focus-visible:ring-0 text-lg"
                        placeholder="Oque está acontecendo?">
                    </Input>
                </div>
                <div className="flex justify-between pt-5">
                    <IconeInput></IconeInput>
                    <Button onClick={Addpost} className="rounded-full font-bold">Postar</Button>
                </div>
            </div>
            {carregando &&
                <div className="flex justify-center py-2">
                    <div className="border border-t-0 border-r-0 w-6 h-6 rounded-full border-white border-b-2 border-l-2 animate-spin">
                    </div>
                </div>
            }


            {listaPosts.map(post => (
                <PostModelo
                    id={post.id}
                    nome1={post.nome1}
                    nome2={post.nome2}
                    data={post.data}
                    conteudo={post.conteudo}
                    img={post.img}
                    key={post.id}
                    datas={post.datas}
                    inicial={post.inicial}
                />
            ))}



        </div>

    );
}