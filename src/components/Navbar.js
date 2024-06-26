import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../redux/action/Login";

const Navbar = (props) => {
    const user = props.dataUser[0];
    const [menu, setMenu] = useState(0);
    const history = useNavigate()
    const logOut = () => {
        sessionStorage.removeItem("accessToken");
        props.deleteUser(user);
        props.checkNumber(0);
    }
    return (
        <div>
            <nav className="navbar">
                {/* SEARCH */}
                <div className="navbar-search">
                    <input type='text' placeholder='Search'/>
                    <button><i className="fas fa-search"></i></button>
                </div>
                {/* NAVIGATION MENU */}
                <div className="menu">
                    <li><NavLink to="/" activeclassname="selected" exact="true"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                    <li onClick={() => setMenu(1)}><NavLink to="#" activeclassname="selected"><i className="fa-solid fa-gamepad"></i>Game</NavLink></li>
                    <li onClick={() => setMenu(2)}><NavLink to="#" activeclassname="selected"><i className="fa-solid fa-book"></i>Tài liệu</NavLink></li>
                    <li><NavLink to="/profile" activeclassname="selected"><i className="fas fa-user-circle"></i>Hồ sơ</NavLink></li>
                    <div className="Account">
                        {sessionStorage.getItem("accessToken") &&
                            <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i>Đăng xuất</NavLink></li>
                        }
                    </div>
                </div>
                {/* CATEGORY */}
                <div className='Category-overlay' 
                    style={{display: menu === 1 || menu === 2 ? "flex" : "none"}} 
                    onClick={() => setMenu(0)}
                >
                    {menu === 1 &&
                    <div className='Category-overlay_box'>
                        <div className='Category-overlay_item' onClick={() => history("/genshin")} >Genshin Impact</div>
                        <div className='Category-overlay_item' onClick={() => history("/aov")}>Liên Quân</div>
                    </div>}
                    {menu === 2 && 
                    <div className='Category-overlay_box'>
                        <div className='Category-overlay_item' onClick={() => history("/front")} >Frontend</div>
                        <div className='Category-overlay_item' onClick={() => history("/back")}>Backend</div>
                    </div>}
                </div>
                {/* USING CHECKBOX HACK */}
                <label htmlFor="nav__bars" className="nav__bars">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" hidden name="" id="nav__bars" />
                <div className="nav__bars-box">
                    <label htmlFor="nav__bars" className="navbar__overlay"></label>
                    <div className="navbar__body">
                        <ul className="bars__box-nav">
                            <li><NavLink to="/"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                            <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i className="fa-solid fa-gamepad"></i>Game</NavLink>
                            <div className="all__product">
                                <ul>
                                    <li><NavLink to="/genshin">Genshin Impact</NavLink></li>
                                    <li><NavLink to="/aov">Liên Quân</NavLink></li>
                                </ul>
                            </div>
                            </li>
                            <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i className="fa-solid fa-book"></i>Tài liệu</NavLink>
                            <div className="all__product">
                                <ul>
                                    <li><NavLink to="/front">Frontend</NavLink></li>
                                    <li><NavLink to="/back">Backend</NavLink></li>
                                </ul>
                            </div>
                            </li>
                            <li><NavLink to="/profile"><i className="fas fa-user-circle"></i>Hồ sơ</NavLink></li>
                            {sessionStorage.getItem("accessToken") && 
                                <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i>Đăng xuất</NavLink></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);