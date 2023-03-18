import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import ArrowBackSvg from "../../assets/ArrowBackSvg";
import './BreadcrumbsCustom.scss'
import {Link} from "react-router-dom";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const BreadcrumbsCustom = () => {
    return (
        <div className={'breadcrumbs-container'}>
            <div className={'desktop-breadcrumbs'} onClick={handleClick}>
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