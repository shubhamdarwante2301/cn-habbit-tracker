import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

import style from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link to="/">
                    Habbitify
                </Link>
            </div>
            <div className={style.rightMenu}>
                <Link to="week-view">
                    <span>weekly view</span>
                </Link>
                <Link to="new-habbit">
                {/* Add-New-Habbit */}
                    <span className={style.addHabbitBtn}><FaPlus /></span>
                    <span className={style.addHabbitText}>Add-New-Habbit</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
