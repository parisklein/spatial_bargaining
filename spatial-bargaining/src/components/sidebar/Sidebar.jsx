import "./sidebar.css"
import React from 'react';
import { DataInput2 } from "./DataInput2"


export class Sidebar extends React.Component {
    updateSidebarData(rSize, avg, xVal, yVal) {
        this.props.updateAppData(rSize, avg, xVal, yVal);
    }




    render() {

        const data = "hello from sidebar"

        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">  Stakeholders</h3>
                        <ul className="sidebarList">
                            <div className="sidebarListItem">
                                <DataInput2
                                    data={data}
                                    updateSidebarData={this.updateSidebarData.bind(this)}
                                />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}
