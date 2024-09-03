import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CalendarPlus, ImagePlay, ImagesIcon, LayoutList, Smile } from "lucide-react";


export const IconeInput = () => {
    return (
        <div className=" flex gap-3">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><ImagesIcon size={20}/></TooltipTrigger>
                    <TooltipContent>
                        <p>Midia</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><ImagePlay size={20}/></TooltipTrigger>
                    <TooltipContent>
                        <p>GIF</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><LayoutList size={20}/></TooltipTrigger>
                    <TooltipContent>
                        <p>Enquete</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><Smile size={20}/></TooltipTrigger>
                    <TooltipContent>
                        <p>Emoji</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><CalendarPlus size={20}/></TooltipTrigger>
                    <TooltipContent>
                        <p>Programar</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}