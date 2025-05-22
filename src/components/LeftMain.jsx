import React, { useState } from 'react';

import "../assets/css/LeftMain.css";

const LeftMain = (props) => {
    const{mobileMenu}=props;
const [activeSubmenu, setActiveSubmenu] = useState('');

  const handleClick = (event,item) => {
    event.preventDefault();
    activeSubmenu === item ? setActiveSubmenu("") : setActiveSubmenu(item);
    // console.log("trtrtrtr", activeSubmenu);
    const submenuElement = event.target.closest(".leftmenuItem").classList;
    submenuElement.contains("subMenuMarker") ? submenuElement.remove("subMenuMarker") : submenuElement.add("subMenuMarker");
    // event.target.closest(".leftMenuText").classList.add("subMenuMarker");
  };
    

  return (
    <>
        <div className={`leftMainWrap ${mobileMenu === true ? "openMobileMenu" : " "}`}>
            <div className='leftMainInside'>
                <div className='leftLogoMain'>
                    <div className='leftLogoinside'>
                        <img src="./images/savvyhrmslogo.png"/>

                    </div>

                </div>
                <div className='leftMenuMain'>
                    <div className='leftMenuinside'>
                        <ul className='leftMenuWrap'>
                            <li className="leftmenuItemWrap dashoboard">
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Dashboard</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap' onClick={(event) => handleClick(event,'switchRole')} >
                                <a href="javascript:void(0)" className='leftmenuItem childElement'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText '>
                                        <p>Switch Role</p>

                                    </div>
                          
                                </a>
                                <ul className='leftSubmenu' style={{display:activeSubmenu === 'switchRole' ? 'block' : 'none'}}>
                                    <li className="leftmenuItemWrap">
                                        <a href="/" className='leftmenuItem'>
                                
                                            <div className='leftMenuImage'>
                                                <img src="./images/home.svg"/>
                                            </div>
                                            <div className='leftMenuText'>
                                                <p>Item 1</p>

                                            </div>
                                
                                        </a>

                                    </li>
                                    <li className="leftmenuItemWrap">
                                        <a href="/" className='leftmenuItem'>
                                
                                            <div className='leftMenuImage'>
                                                <img src="./images/home.svg"/>
                                            </div>
                                            <div className='leftMenuText'>
                                                <p>Item 1</p>

                                            </div>
                                
                                        </a>

                                    </li>
                                </ul>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Self-Services</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Attendance</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Leave</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Punch</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>On Duty</p>

                                    </div>
                          
                                </a>

                            </li>

                        </ul>

                    </div>

                </div>
                <div className='leftMenufooter'>
                    <ul className='leftMenuWrap'>
                            <li className="leftmenuItemWrap">
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>My Profile</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Settings</p>

                                    </div>
                          
                                </a>

                            </li>
                            <li className='leftmenuItemWrap'>
                                <a href="/" className='leftmenuItem'>
                         
                                    <div className='leftMenuImage'>
                                        <img src="./images/home.svg"/>
                                    </div>
                                    <div className='leftMenuText'>
                                        <p>Sign Out</p>

                                    </div>
                          
                                </a>

                            </li>
                            


                        </ul>

                </div>
                
            </div>
        </div>
    </>
  )
}

export default LeftMain