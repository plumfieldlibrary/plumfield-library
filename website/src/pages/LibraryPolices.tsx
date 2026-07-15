import { Nav } from "@/components/Nav";
import { AppSidebar } from "@/components/policySidebar";
import { SidebarWrapper } from "@/components/PolicyWrapper";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavLink, Outlet } from "react-router";

export function PolicyLandingPage() {
    return <SidebarWrapper>
        <h1>Library Polices</h1>
        <p>Hello! Most-to-all the library polices may be found here. Below are some quick links that you might find helpful:</p>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h2>Library Catalog</h2>
                <Button asChild><a href="https://www.libib.com/u/plumfieldlibrary">Libib</a></Button>

            </div>
            <div>
                <h2>Patron Dashboard</h2>
                <Button asChild><NavLink to="/library-policies/dashboard">Read Policy</NavLink></Button>
            </div>
            <div>
                <h2>Library Classes</h2>
                <Button asChild><NavLink to="/library-policies/classes">Read Policy</NavLink></Button>
            </div>
            <div>
                <h2>Renewals</h2>
                <Button asChild><NavLink to="/library-policies/renewals">Read Policy</NavLink></Button>
            </div>
        </div>
    </SidebarWrapper>
}


export function LibraryPolices() {

    return (
        <>
            <SidebarProvider>
                <div className="mx-0 w-full">
                    <Nav />
                    <div className="flex ">
                        <AppSidebar />
                        <div className="w-full">
                            <div className="w-full flex flex-col min-h-screen">
                                <div className="sticky pt-4 top-16 z-10 border-b bg-background"><SidebarTrigger /></div>
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <Outlet />
                                    </div>
                                    {/* <p className=" text-gray-400 mt-auto"><em>Last Updated: 7/12/2026</em></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </>)
}