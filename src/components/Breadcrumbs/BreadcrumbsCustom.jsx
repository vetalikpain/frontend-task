import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link, useLocation} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {Typography} from "@mui/material";
import ArrowBackSvg from "../../assets/ArrowBackSvg";
import './BreadcrumbsCustom.scss'


const BreadcrumbsCustom = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);

    return (
        <div className={'breadcrumbs-container'}>
            <div className={'desktop-breadcrumbs'}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography underline="hover" color="inherit" href="/">
                        Home
                    </Typography>
                    {pathNames.map((name, index) => {
                        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathNames.length - 1;

                        return isLast ? (
                            <Typography key={uuidv4()} color="text.primary">
                                {name}
                            </Typography>
                        ) : (
                            <Link key={uuidv4()} color="inherit" to={routeTo}>
                                {name}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </div>
            <div className={'mobile-breadcrumbs'}>
                <Link to={'/electronic'}><ArrowBackSvg/></Link>
                {pathNames[pathNames.length - 1] === 'electronic' || location.pathname === '/' ? <p>Electronics</p> : null}
            </div>
        </div>
    );
}
export default BreadcrumbsCustom