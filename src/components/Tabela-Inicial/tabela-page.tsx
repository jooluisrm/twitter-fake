import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button";
import { EnvelopeClosedIcon, HomeIcon } from "@radix-ui/react-icons";
import { Bell, CircleEllipsis, Currency, Home, LetterText, Mail, MessageSquareWarningIcon, Search, Share, SquareTerminal, UserRound, UsersRound } from "lucide-react";


export const TabelaPage = () => {
    return (
        <div>
            <Tabs defaultValue="home" className="flex ">
                <TabsList className="flex flex-col h-screen justify-start items-start gap-4 pt-3 w-64 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 fill-black dark:fill-white ml-3"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    <TabsTrigger value="home" className="text-xl flex items-center gap-4"> <Home /> Página Inicial</TabsTrigger>
                    <TabsTrigger value="explorar" className="text-xl flex items-center gap-4"> <Search /> Explorar</TabsTrigger>
                    <TabsTrigger value="notificação" className="text-xl flex items-center gap-4"> <Bell/> Notificações</TabsTrigger>
                    <TabsTrigger value="mensagens" className="text-xl flex items-center gap-4"> <Mail/> Mensagens</TabsTrigger>
                    <TabsTrigger value="grok" className="text-xl flex items-center gap-4"> <SquareTerminal/> Grok</TabsTrigger>
                    <TabsTrigger value="comunidades" className="text-xl flex items-center gap-4"> <UsersRound/>Comunidades</TabsTrigger>
                    <TabsTrigger value="perfil" className="text-xl flex items-center gap-4"> <UserRound/> Perfil</TabsTrigger>
                    <TabsTrigger value="mais" className="text-xl flex items-center gap-4"> <CircleEllipsis/> Mais</TabsTrigger>
                    <Button className="w-full text-xl py-6 rounded-full" >Postar</Button>
                </TabsList>
                <TabsContent value="home">Pagina inicial</TabsContent>
                <TabsContent value="explorar">explorar</TabsContent>
                <TabsContent value="notificação">notificação</TabsContent>
                <TabsContent value="mensagens">mensagens</TabsContent>
                <TabsContent value="grok">grok</TabsContent>
                <TabsContent value="comunidades">comunidades</TabsContent>
                <TabsContent value="perfil">perfil.</TabsContent>
                <TabsContent value="mais">mais</TabsContent>
            </Tabs>
        </div>
    );
}