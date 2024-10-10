import { createContext, useState, useContext } from "react";

const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const setExpandedTrue = () => setIsExpanded(true);
    const setExpandedFalse = () => setIsExpanded(false);
    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    return (
        <SideBarContext.Provider
            value={{ isExpanded, setExpandedTrue, setExpandedFalse, toggleExpanded }}
        >
            {children}
        </SideBarContext.Provider>
    );
}

export const useSideBar = () => useContext(SideBarContext);