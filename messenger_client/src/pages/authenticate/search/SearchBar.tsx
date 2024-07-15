import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from "lucide-react"
import React from "react"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const SearchBar : React.FC = () => {
    
    return(
        <Dialog>
            <DialogTrigger asChild>
                    <Button variant={"outline"} className="h-7 w-52 flex justify-start">
                        <SearchIcon color="#94a3b8" size={20}/>
                        <span className="text-slate-400 ml-5">Recheche...</span>
                    </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex h-5 items-center mb-3">
                            <SearchIcon size={25} color="#94a3b8"/>
                            <Input id="picture" type="text" 
                            placeholder="Ecrivez votre recherche..."
                            className="w-full outline-none border-none" />
                    </DialogTitle>
                    <Separator />
                </DialogHeader>
                <ScrollArea id="search-results" className="h-72">
                    {tags.map((tag) => (
                            <React.Fragment key={tag}>
                                <div className="text-sm">
                                    {tag}
                                </div>
                                <Separator className="my-2" />
                            </React.Fragment>
                        ))}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default SearchBar