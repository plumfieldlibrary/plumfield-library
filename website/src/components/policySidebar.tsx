import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
} from "@/components/ui/sidebar"
import { NavLink } from "react-router"

export function AppSidebar() {
    return (
        <Sidebar variant="floating">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarContent className="ps-4">
                        <NavLink to="/library-polices" className="text-2xl">Library Polices</NavLink>
                        <div className="ps-3 flex flex-col pt-2">
                            <NavLink to="/library-polices/holds" className="text-link hover:text-white text-2xl md:text-lg ">Holds</NavLink>
                            <NavLink to="/library-polices/classes" className="text-link hover:text-white text-2xl md:text-lg">Classes</NavLink>
                            <NavLink to="/library-polices/renewals" className="text-link hover:text-white text-2xl md:text-lg">Renewals</NavLink>
                            <NavLink to="/library-polices/interlibrary-loan" className="text-link hover:text-white text-2xl md:text-lg">Interlibrary Loan</NavLink>
                            <NavLink to="/library-polices/dashboard" className="text-link hover:text-white text-2xl md:text-lg">Patron Dashboard</NavLink>
                            <NavLink to="/library-polices/volunteers" className="text-link hover:text-white text-2xl md:text-lg">Volunteer Positions</NavLink>

                        </div>
                    </SidebarContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}