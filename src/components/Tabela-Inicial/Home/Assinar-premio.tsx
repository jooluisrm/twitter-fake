import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export const AssinarPremio = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Assine o Premium</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm">Assine para desbloquear novos recursos e, se elegível, receba uma parte da receita dos anúncios.</p>
            </CardContent>
            <CardFooter>
                <Button className="rounded-full font-bold">Increver-se</Button>
            </CardFooter>
        </Card>

    );
}