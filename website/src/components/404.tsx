import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import { NavLink } from "react-router"
import { Button } from "./ui/button"

export const NotFoundPage = () => {
    return (
        <div>
            <Empty className="p-8">
                <EmptyHeader>
                    <EmptyTitle className="text-3xl">404 - Not Found</EmptyTitle>
                    <EmptyDescription>
                        The page you&apos;re looking for doesn&apos;t exist.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex flex-row gap-6 justify-center items-center">
                        <Button asChild><NavLink to="/">Library Home Page</NavLink></Button>
                        <Button asChild><NavLink to="/library-policies">Library Policy Page</NavLink></Button>
                    </div>
                    <EmptyDescription>
                        Need help? <a href="mailto:plumfieldlivinglibrary@gmail.com">Contact the Library</a>
                    </EmptyDescription>
                </EmptyContent>
            </Empty>
        </div>
    )
}