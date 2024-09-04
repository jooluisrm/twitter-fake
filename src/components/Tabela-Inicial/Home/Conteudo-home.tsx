import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { IconeInput } from "./Icones-Input";
import { Button } from "@/components/ui/button";
import { PostModelo } from "@/components/Posts/Posts-modelo";
import { useState } from "react";
import { Posts } from "@/data/posts";



export const ConteudoHome = () => {

   

    return (
        <div>
            <div className="border border-t-0 border-l-0 border-r-0 py-3 px-3">
                <div className="flex gap-3">
                    <Avatar className="flex-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <Input className="flex-1 border-0  focus-visible:ring-0 text-lg" placeholder="Oque está acontecendo?"></Input>
                </div>
                <div className="flex justify-between pt-5">
                    <IconeInput></IconeInput>
                    <Button className="rounded-full font-bold">Postar</Button>
                </div>
            </div>

            {Posts.map(post => (
                <PostModelo id={post.id} nome1={post.nome1} nome2={post.nome2} data={post.data} conteudo={post.conteudo} img={post.img} key={post.id} datas={post.datas} />
            ))}



        </div>

    );
}