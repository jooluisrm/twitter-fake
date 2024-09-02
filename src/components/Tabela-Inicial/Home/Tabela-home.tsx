import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const TabelaHome = () => {
    return (
        <main className="flex">
            <div className="flex-1">
                <Tabs defaultValue="paraVoce" className="border border-t-0">
                    <TabsList className="w-full flex bg-transparent rounded-none border border-t-0 border-l-0 border-r-0 py-6">
                        <TabsTrigger value="paraVoce" className="flex-1 text-base">Para você</TabsTrigger>
                        <TabsTrigger value="seguindo" className="flex-1 text-base">Seguindo</TabsTrigger>
                    </TabsList>
                    <TabsContent value="paraVoce">Para vc</TabsContent>
                    <TabsContent value="seguindo">seguindo</TabsContent>
                </Tabs>
            </div>
            <div className="flex-2 w-96 pl-5">
                <Input />
            </div>
        </main>

    );
}