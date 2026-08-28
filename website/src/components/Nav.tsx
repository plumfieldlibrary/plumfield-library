import { NavLink } from "react-router"
import { ContactUs } from "./Buttons"
import { Button } from "./ui/button"

// TODO: add mobile nav overlay

export const Nav = () => (
    <nav className="sticky p-4 top-0 z-10 bg-foreground text-background shadow-sm flex items-center">
        <div className="justify-start">
            <a className="font-bold text-sm sm:text-lg" href="/">Plumfield Library</a>
        </div>
        <div className="justify-end ml-auto flex items-center">
            <ContactUs />
            <Button asChild variant={"ghost"}>
                <NavLink to="/library-policies">Policies</NavLink>
            </Button>
            <Button className="bg-background text-foreground rounded-2xl hover:bg-background hover:text-background " asChild>
                <a href="https://dashboard.plumfieldlibrary.com">Log In</a>
            </Button>
        </div>
    </nav>)