import { useIsMobile } from "@/hooks/use-mobile"
import { Menu, } from "lucide-react"
import { NavLink } from "react-router"
import { ContactUs, ContactUsMobile, WaitingList, WaitingListMobile } from "./Buttons"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

// TODO: add mobile nav overlay

export const NavOverlay = () => (
    <Sheet>
        <Button asChild size={"icon-lg"}>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
        </Button>
        <SheetContent className="bg-muted">
            <div className="flex items-center justify-center flex-col gap-2 py-6">
                <Button asChild variant={"ghost"} className="text-black font-bold text-lg">
                    <a href="https://dashboard.plumfieldlibrary.com">Log In</a>
                </Button>
                <Button asChild variant={"ghost"} className="text-black font-bold text-lg">
                    <NavLink to="/library-policies">Policies</NavLink>
                </Button>
                <ContactUsMobile />
                <WaitingListMobile />
            </div>
        </SheetContent>
    </Sheet>
)

export const Nav = () => (
    <nav className="sticky p-4 top-0 z-10 bg-foreground text-background shadow-sm flex items-center">
        <div className="justify-start">
            <a className="font-bold text-sm sm:text-lg" href="/">Plumfield Library</a>
        </div>
        <div className="justify-end ml-auto flex items-center">
            {useIsMobile() ? <NavOverlay /> : <>
                <ContactUs />
                <WaitingList />
                <Button asChild variant={"ghost"}>
                    <NavLink to="/library-policies">Policies</NavLink>
                </Button>
                <Button className="bg-background text-foreground rounded-2xl hover:bg-background hover:text-background " asChild>
                    <a href="https://dashboard.plumfieldlibrary.com">Log In</a>
                </Button>
            </>
            }
        </div>
    </nav>)