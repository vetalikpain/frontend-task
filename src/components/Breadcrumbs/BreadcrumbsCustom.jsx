import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from "react-router-dom";

import ArrowBackSvg from "../../assets/ArrowBackSvg";
import './BreadcrumbsCustom.scss'



const BreadcrumbsCustom = () => {
    return (
        <div className={'breadcrumbs-container'}>
            <div className={'desktop-breadcrumbs'}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Electronics
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={'mobile-breadcrumbs'}>
                <Link to={'/'}><ArrowBackSvg/></Link>
                <p>Electronics</p>
            </div>
        </div>
    );
}
export default BreadcrumbsCustom