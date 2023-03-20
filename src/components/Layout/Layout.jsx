import React from "react";
import Header from "../Header/Header";
import BreadcrumbsCustom from "../Breadcrumbs/BreadcrumbsCustom";
import './Layout.scss'

const Layout = ({children}) => {

    return (
        <div className={'layout'}>
            <Header/>
            <BreadcrumbsCustom/>
            {children}
        </div>
    )
}
export default Layout