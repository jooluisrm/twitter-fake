import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const Tendencias = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Em Alta para você</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Esportes - Em Alta</CardDescription>
                <p>Uma tendência de esporte</p>
            </CardContent>

        </Card>

    );
}