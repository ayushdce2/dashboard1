import React from 'react';
import "../assets/css/RightMain.css";
import TimeHook from './customHook/TimeHook';
import Rightcalendar from "./Rightcalendar";
import DateHook from "./customHook/DateHook";
// import MobileMenuToggler from "./customHook/MobileMenuToggler";

const RightMain = (props) => {

    const {setMobileMenu,mobileMenu}=props.RightPropsList;
    // console.log(mobileMenu,"props");
    
    function MobileMenuToggler() {
        mobileMenu===false? setMobileMenu(true) : setMobileMenu(false);
    }
    const activateDarkTheme =()=>{
        document.body.classList.toggle('dark-mode');
    }
    const activateLightTheme =()=>{
        document.body.classList.remove('dark-mode');
    }
  return (
    <>
        <div className='RightMainWrap'>
            <div className='RightMaininside'>
                <div className='rightUserDetails'>
                    <div className='rightUserWelcomeWrap'>
                        <div className='rightUserWelcomeinside'>
                            <h2>Good Morning, Meghna !</h2>
                            <p>Welcome back to savvy HRMS ! Here's your dashboard overfview.</p>
                        </div>
                        <div className='rightUserThemeToggler'>
                            <div className='rightUserThemeSelector'>
                                <div onClick={activateLightTheme }>
                                   <img src='./images/day.svg'/>
                                </div>
                                <div onClick={activateDarkTheme}>
                                   <img src='./images/night.svg'/>
                                </div>
                            </div>
                            <div className='mobileMenu' onClick={MobileMenuToggler}>
                                <img src='./images/menu.svg' style={{display: mobileMenu===false ? "block" : "none" }}/>
                                <img src='./images/menuClose.svg' style={{display: mobileMenu===false ? "none" : "block" }}/>
                            </div>
                        </div>

                    </div>
                    <div className='rightUserinsights'>
                        <div className='rightViewAttendance'>
                            <div className='rightViewAttendanceRow1'>
                                <div className='rightviewAttendanceImg'>
                                    <img src='./images/sun.svg'/>

                                </div>
                                <div className='rightviewAttendanceHeading'>
                                    <div className='rightviewAttendanceTime'>
                                        {/* <p>9:32 AM</p> */}
                                        <TimeHook/>

                                    </div>
                                    <div className='rightviewAttendanceCaption'>
                                        <p>Realtime Insight</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rightViewAttendanceRow2'>
                                <p>Today :</p>
                                <DateHook/>
                                

                            </div>
                            <div className='rightViewAttendanceRow3'>
                                <a href='javascript:void(0)'> View Attendance</a>
                            </div>

                        </div>
                        <div className='presentEmployees'>
                            <div className='presentEmployeesInside'>
                                <div className='presentEmployeesRow1'>
                                    <div className='presentEmployeesIcon'>
                                        <img src='./images/broadcast.svg'/>
                                    </div>

                                </div>
                                <div className='presentEmployeesRow2'>
                                    <p>Present Employees</p>
                                    <p>235</p>

                                </div>

                            </div>

                        </div>
                        <div className='absentEmployees'>
                            <div className='absentEmployeesInside'>
                                <div className='absentEmployeesRow1'>
                                    <div className='absentEmployeesIcon'>
                                        <img src='./images/broadcast.svg'/>
                                    </div>

                                </div>
                                <div className='absentEmployeesRow2'>
                                    <p>Absent Employees</p>
                                    <p>05</p>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='rightUserAnnouncement'>
                        <div className='rightUserAnnouncementInside'>
                            <div className='rightUserAnnouncementRow1'>

                            
                            <div className='rightUserAnnouncementRow1col1'>
                                <div className='rightUserAnnouImg'>
                                    <img src='./images/broadcast.svg'/>
                                </div>
                                <div className='rightUserAnnouText'>
                                    <p>Announcements</p>
                                </div>
                            </div>
                            <div className='rightUserAnnouncementRow1col2'>
                                <div className='rightUserAnnouImg'>
                                    <img src='./images/broadcast.svg'/>
                                </div>
                                <div className='rightUserAnnouText'>
                                    <p>Thoughts of the day</p>
                                </div>
                            </div>

                            </div>
                            <div className='rightUserAnnouncementRow2'>
                                <p>
                                    When you made a mistake, don't look back at it long. Take the reason of the things into your mind and then look forward.
                                    Mistakes are lessons of wisdom. The Past can not be changed. The future is yet in your power.
                                </p>
                                <p>
                                    A strong, positive, self-image is the bestpossible preparation for success.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
                
                <Rightcalendar/>

            </div>

        </div>
    </>
  )
}

export default RightMain