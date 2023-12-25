import React from 'react'
import SidebarApplicant from '../pages/SidebarApplicant'
import Dashborad from "../components/Dashborad";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";

function Layout() {
  return (
    <>
<div className="row">
    <div className="col">< SidebarApplicant /></div>
  <div className="col">
        <Dashborad />
    </div>
  </div>
    </>
  )
}

export default Layout