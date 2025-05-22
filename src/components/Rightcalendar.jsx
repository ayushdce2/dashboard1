import "../assets/css/Rightcalendar.css";
import CalendarMain from "./CalendarMain.jsx";

function Rightcalendar() {
  return (
    <>
        <div className='rightcalendar'>
            <div className="rightcalendarRow1">
                <a href="javascript:void(0)" className="rcRow1Mail">
                    <img src="./images/mail.svg"/>

                </a>
                <a href="javascript:void(0)" className="rcRow1Notification">
                    <img src="./images/notification.svg"/>

                </a>
                <div className="rcRow1UserWrap">
                    <div className="rcRow1Userinside">
                        <div className="rcRow1UserImg">
                            <img src="./images/user.svg"/>
                        </div>
                        <div className="rcRow1UserDetails">
                            <p>Meghana Tomar</p>
                            <p>Chief General Manager</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="rightcalendarRow2">
                <div className="rcMainWrap">
                    <a href="/"className="rcAttendance">
                    <p>Attendance</p>

                    </a>
                    <a href="/" className="rcupcoming">
                    <p>Upcoming Holidays</p>

                    </a>
                </div>
<CalendarMain/>
            <div className="rcHolidays">
                <p>Holidays</p>

            </div>
            <div className="rcHolidaysList">
                <div className="rcHolidaysListItems">
                    <div>
                        <p>15 August</p>
                    </div>
                    <div>
                        <p>Independence Day</p>
                    </div>

                </div>
                <div className="rcHolidaysListItems">
                    <div>
                        <p>19 August</p>
                    </div>
                    <div>
                        <p>Raksha Bandhan</p>
                    </div>

                </div>

            </div>

            </div>

        
        </div>
    </>
  )
}

export default Rightcalendar