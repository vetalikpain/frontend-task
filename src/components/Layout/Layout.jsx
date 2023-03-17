import React from "react";
import Header from "../Header/Header";
import { useMatches } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import './Layout.scss'
const Layout = ({children}) => {
    const matches = useMatches();
    console.log(matches)
    return (
        <div className={'layout'}>
            <Header />
            <Breadcrumbs />
            {children}
        </div>
    )
}
export default Layout