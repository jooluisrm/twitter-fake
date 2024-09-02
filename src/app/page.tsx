"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const Page = () => {
    return (
        <div>
            <Button>Aperte</Button>
            <ThemeToggle></ThemeToggle>
        </div>
    );
}

export default Page;