import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
    return (
        <div className="flex gap-3 border border-t-0 border-l-0 border-r-0 py-3 px-3">
            <div className="flex">
                <Skeleton className="h-12 w-12 rounded-full"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <div>
                        <Skeleton className="h-4 w-7" />
                    </div>
                </div>
                <div>
                    <Skeleton className="h-7 w-full" />
                </div>
                <div className="flex justify-around">
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                </div>
            </div>
        </div>

    )
}

