import React from "react";
import {useMatches} from "react-router-dom";

import Header from "../Header/Header";
import BreadcrumbsCustom from "../Breadcrumbs/BreadcrumbsCustom";
import './Layout.scss'

const Layout = ({children}) => {
    const matches = useMatches();
    console.log(matches)
    return (
        <div className={'layout'}>
            <Header/>
            <BreadcrumbsCustom/>
            {children}
        </div>
    )
}
export default Layout