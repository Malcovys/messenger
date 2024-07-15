import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { BellIcon } from "lucide-react"
import React from "react"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const Notification : React.FC = () => {
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"ghost"} size={"icon"}><BellIcon /></Button>
            </PopoverTrigger>
            <PopoverContent>
                <h5 className="font-bold">Notifications</h5>
                <ScrollArea  className="h-72 mt-2">
                    {tags.map((tag) => (
                        <React.Fragment key={tag}>
                            <div className="text-sm">
                                {tag}
                            </div>
                            <Separator className="my-2" />
                        </React.Fragment>
                    ))}
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}

export default Notification