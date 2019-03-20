import React, { Component } from "react"

import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"



class Tasks extends Component {
    render() {
        return (
            <React.Fragment className="appJsFolder">
                <NavBar />

                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Tasks