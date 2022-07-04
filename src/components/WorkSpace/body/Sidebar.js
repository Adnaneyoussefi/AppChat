import React from 'react'
import "./sidebar.css"
import Create from '@mui/icons-material/Create';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarHeader">
            <div className="sidebarInfo">
                <h2>Abdsamad BRs</h2>
                <h3>
                    <FiberManualRecord/>
                    Abdessamad
                </h3>
            </div>
            <Create/>
        </div>
        <div className="sidebarBody">

        </div>


    </div>
  )
}

export default Sidebar