import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConteudoHome } from "./Conteudo-home";
import { Search } from "lucide-react";
import { AssinarPremio } from "./Assinar-premio";
import { Tendencias } from "./Tendencias";


export const TabelaHome = () => {
    return (
        <main className="flex">
            <div className="flex-1">
                <Tabs defaultValue="paraVoce" className="border border-t-0">
                    <TabsList className="w-full flex bg-transparent rounded-none border border-t-0 border-l-0 border-r-0 py-6">
                        <TabsTrigger value="paraVoce" className="flex-1 text-base">Para você</TabsTrigger>
                        <TabsTrigger value="seguindo" className="flex-1 text-base">Seguindo</TabsTrigger>
                    </TabsList>
                    <TabsContent value="paraVoce" className="flex flex-col min-h-screen mt-0">
                        <ConteudoHome />
                    </TabsContent>
                    <TabsContent value="seguindo">seguindo</TabsContent>
                </Tabs>
            </div>
            {/*Parte de buscar*/}
            <div className="flex-2 gap-5 flex items-center flex-col w-96 pl-5 2xl:min-w-[600px]">
                <div className="flex items-center pt-2">
                    <Search className="translate-x-10"/>
                    <Input className="rounded-full text-lg py-6 pl-14" placeholder="Buscar" />
                </div>

                <AssinarPremio />
                <Tendencias />

            </div>
        </main>

    );
}