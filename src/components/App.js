import React, { Component } from "react"

import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"



class Tasks extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Tasks