import { type ReactNode } from "react"
import { useSidebar } from "./ui/sidebar"

export const SidebarWrapper = ({ children }: { children: ReactNode }) => {
    const {
        open,
    } = useSidebar()
    return <div className={open ? "" : "px-8"}>{children}</div>
}