import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CardDescription } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ChartColumn, Heart, MessageCircle, Repeat, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
    id: number,
    nome1: string,
    nome2: string,
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

export const PostModelo = ({ conteudo, data, id, img, nome1, nome2, datas }: Props) => {
    return (
        <div className="flex gap-3 border border-t-0 border-l-0 border-r-0 py-3 px-3">
            <div className="flex">
                <Avatar>
                    <AvatarImage src={img} />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>

            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-3">
                    <HoverCard>
                        <HoverCardTrigger className="font-bold cursor-pointer">{nome1}</HoverCardTrigger>
                        <HoverCardContent className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src={img} />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <CardDescription>{nome2}</CardDescription>
                        </HoverCardContent>
                    </HoverCard>

                    <CardDescription>{nome2}</CardDescription>

                    <CardDescription>{data}</CardDescription>
                </div>


                <div>
                    {conteudo}
                </div>

                <div className="">
                    <ToggleGroup type="single" className="flex justify-around">
                        <ToggleGroupItem value="a" className="flex gap-1"><MessageCircle className="size-4" />{datas.comentarios}</ToggleGroupItem>
                        <ToggleGroupItem value="b" className="flex gap-1"><Repeat className="size-4" />{datas.republicacao}</ToggleGroupItem>
                        <ToggleGroupItem value="c" className="flex gap-1"><Heart className="size-4" />{datas.likes}</ToggleGroupItem>
                        <ToggleGroupItem value="d" className="flex gap-1"><ChartColumn className="size-4" />{datas.viws}</ToggleGroupItem>
                        <ToggleGroupItem value="f" className="flex gap-1"><Share className="size-4" />{datas.compartilhamentos}</ToggleGroupItem>
                    </ToggleGroup>
                </div>

            </div>

        </div>
    );
}