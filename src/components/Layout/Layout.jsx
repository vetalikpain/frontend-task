import React from "react";
import Header from "../Header/Header";
import { useMatches } from "react-router-dom";
import BreadcrumbsCustom from "../Breadcrumbs/BreadcrumbsCustom";
import './Layout.scss'
const Layout = ({children}) => {
    const matches = useMatches();
    console.log(matches)
    return (
        <div className={'layout'}>
            <Header />
            <BreadcrumbsCustom />
            {children}
        </div>
    )
}
export default Layout