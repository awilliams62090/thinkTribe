import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Nav from "../components/Layout/Nav"

class UserCalendar extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            thinkTribe<b>calendar</b>
                        </span>
                    </div>
                </header>
                <main>
                    <Calendar/>
                </main>
            </div>
        );
    }
}

export default UserCalendar;