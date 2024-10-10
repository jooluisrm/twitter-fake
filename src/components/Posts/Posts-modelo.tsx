import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CardDescription } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ChartColumn, Ellipsis, Heart, MessageCircle, Option, OptionIcon, Repeat, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContext, useState } from "react";
import { ContextPost } from "../Context/ContextPost";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export type PropsItem = {
    item: {
        id: number,
        nome1: string,
        nome2: string,
        inicial: string,
        data: string,
        conteudo: string,
        img: string,
        datas: {
            comentarios: number,
            republicacao: number,
            likes: number,
            viws: number,
            compartilhamentos: number
        }
    }

}

export const PostModelo = ({ item }: PropsItem) => {

    const ctx = useContext(ContextPost);

    const [deletarOpen, setDeletarOpen] = useState(false);
    const openDialog = () => setDeletarOpen(true);
    const closeDialog = () => setDeletarOpen(false);

    const [editar, setEditar] = useState(false);

    const deletarPost = (id: number) => {
        // Filtra a lista de posts, removendo o post com o ID correspondente
        const postsAtualizados: any = ctx?.listaMeusPosts.filter(post => post.id !== id);

        // Atualiza o estado com a nova lista de posts
        ctx?.setListaMeusPosts(postsAtualizados);

        // O console.log precisa esperar a atualização ser refletida
        setTimeout(() => {
            console.log("Lista atualizada de posts:", ctx?.listaMeusPosts);
        }, 0);
    };

    const editarPost = (id: number) => {
        // Encontra o post que precisa ser editado
        const postEdit: any = ctx?.listaMeusPosts.find(post => post.id === id);

        // Exibe o prompt para o usuário inserir o novo conteúdo
        const novoConteudo = prompt('Digite o novo conteúdo:', postEdit?.conteudo);

        // Verifica se o usuário forneceu o novo conteúdo
        if (novoConteudo !== null && postEdit) {
            // Atualiza a lista de posts com o conteúdo editado
            const postsAtualizados: any = ctx?.listaMeusPosts.map(post => post.id === id ? { ...post, conteudo: novoConteudo } : post);
            // Atualiza o estado com a nova lista de posts
            setEditar(true);
            ctx?.setListaMeusPosts(postsAtualizados);
        }
        
    };

    return (

        <div className="flex gap-3 border border-t-0 border-l-0 border-r-0 py-3 px-3 2xl:w-[680px]">

            <div className="flex">
                <Avatar>
                    <AvatarImage src={item.img} />
                    <AvatarFallback>{item.inicial}</AvatarFallback>
                </Avatar>

            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <HoverCard>
                            <HoverCardTrigger className="font-bold cursor-pointer">{item.nome1}</HoverCardTrigger>
                            <HoverCardContent className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={item.img} />
                                    <AvatarFallback>{item.inicial}</AvatarFallback>
                                </Avatar>
                                <CardDescription>{item.nome2}</CardDescription>
                            </HoverCardContent>
                        </HoverCard>

                        <CardDescription>{item.nome2}</CardDescription>

                        <CardDescription>{item.data}</CardDescription>
                        <CardDescription>{editar && "post editado"}</CardDescription>
                    </div>

                    <div className="cursor-pointer"> {/*Div para editar/deletar posts*/ }
                        {item.nome2 === "@jao.luisrm_" &&
                            <DropdownMenu>
                                <DropdownMenuTrigger><CardDescription><Ellipsis /></CardDescription></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Meu Post</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => editarPost(item.id)}>Editar</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-500" onClick={openDialog}>Deletar</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        }
                        {item.nome2 != "@jao.luisrm_" &&
                            <DropdownMenu>
                                <DropdownMenuTrigger><CardDescription><Ellipsis /></CardDescription></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Post</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500">Denunciar</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        }
                    </div>

                </div>


                <div className="max-w-[520px] 2xl:max-w-[540px] break-words">
                    {item.conteudo}
                </div>

                <div className="">
                    <ToggleGroup type="single" className="flex justify-around">
                        <ToggleGroupItem value="a" className="flex gap-1"><MessageCircle className="size-4" />{item.datas.comentarios}</ToggleGroupItem>
                        <ToggleGroupItem value="b" className="flex gap-1"><Repeat className="size-4" />{item.datas.republicacao}</ToggleGroupItem>
                        <ToggleGroupItem value="c" className="flex gap-1"><Heart className="size-4" />{item.datas.likes}</ToggleGroupItem>
                        <ToggleGroupItem value="d" className="flex gap-1"><ChartColumn className="size-4" />{item.datas.viws}</ToggleGroupItem>
                        <ToggleGroupItem value="f" className="flex gap-1"><Share className="size-4" />{item.datas.compartilhamentos}</ToggleGroupItem>
                    </ToggleGroup>
                </div>

            </div>
            

            <AlertDialog open={deletarOpen} onOpenChange={setDeletarOpen}>
                <AlertDialogContent className="flex flex-col items-center">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza que deseja deletar esse Post?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deletarPost(item.id)}>Deletar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}