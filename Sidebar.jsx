import "./sidebar.css"

import DataInput from "./DataInput"

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">  Stakeholders</h3>
                    <ul className="sidebarList">
                        <div className="sidebarListItem">
                            <DataInput {...props}/>
                        </div>
                    </ul>


                </div>
            </div>
        

        </div>
        
        )
}
