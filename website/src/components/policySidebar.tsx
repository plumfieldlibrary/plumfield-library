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
                        <NavLink to="/library-policies" className="text-2xl">Library Polices</NavLink>
                        <div className="ps-3 flex flex-col pt-2">
                            <NavLink to="/library-policies/holds" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Holds</NavLink>
                            <NavLink to="/library-policies/classes" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Classes</NavLink>
                            <NavLink to="/library-policies/renewals" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Renewals</NavLink>
                            <NavLink to="/library-policies/interlibrary-loan" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Interlibrary Loan</NavLink>
                            <NavLink to="/library-policies/dashboard" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Patron Dashboard</NavLink>
                            <NavLink to="/library-policies/volunteers" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Volunteer Positions</NavLink>
                            <NavLink to="/library-policies/young-children" className={({ isActive }) => `hover:text-white text-2xl md:text-lg ${isActive ? "text-white" : "text-link"} `}>Young Children</NavLink>

                        </div>
                    </SidebarContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}