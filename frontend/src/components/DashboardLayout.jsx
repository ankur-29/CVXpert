import React from "react";
import { Navbar } from "./Navbar";

export const DashboardLayout = ({activeMenu, children}) => {
    //const user = useContext(UserContext);
    const user = { name: "John Doe" }; // Mock user
    return (
        <div>
            <Navbar activeMenu = {activeMenu} />
            {user && <div className=" container mx-auto pt-4 pb-4">{children}</div>}
        </div>
    )
}