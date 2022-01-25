import "./sidebar.css"

import DataInput from "./DataInput"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">  Stakeholders</h3>
                    <ul className="sidebarList">
                        <div className="sidebarListItem">
                            <DataInput />
                        </div>
                    </ul>


                </div>
            </div>
        

        </div>
        
        )
}
