import React from "react";
import MainLogo from '../../assets/main-logo.png'
import './Header.scss'

const Header = () => {
    return (
        <>
            <header className={'desktop-header'}>
                <div className={'logo-wrapper'}>
                    <img src={MainLogo} alt=""/>
                </div>
                <h2><span>Frontend task</span></h2>
                <h2>Vitaliy Moshkivskiy</h2>
            </header>
            <header className={'mobile-header'}>
                return Electronics
            </header>
        </>
    )
}
export default Header