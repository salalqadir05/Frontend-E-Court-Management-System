import React,{useState} from "react"
import styled from "styled-components";
import bglogo from '../assets/bglogo.png'
import { Link } from "react-router-dom";
function SidebarApplicant() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
<>
<Container>
<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon" ></i>
        <div className="logo_name">Applicant Panel</div>
        <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>
      </div>

    
    <ul className="nav-list">
    
      <li>
        <Link >
          <i className="bx bx-grid-alt"></i>
          <span className="link_name">Dashboard</span>
        </Link>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <Link href="#">
          <i className="bx bx-user"></i>
          <span className="link_name">Hire Lawyer</span>
        </Link>
        <span className="tooltip">User</span>
      </li>
      <li>
        <Link href="#">
          <i className="bx bx-chat"></i>
          <span className="link_name">Message to Lawyer</span>
        </Link>
        <span className="tooltip">Message</span>
      </li>
      <li>
        <Link href="#">
          <i className="bx bx-pie-chart-alt-2"></i>
          <span className="link_name">Analytics</span>
        </Link>
        <span className="tooltip">Analytics</span>
      </li>
      <li>
        <Link href="#">
          <i className="bx bx-folder"></i>
          <span className="link_name">File A Case</span>
        </Link>
        <span className="tooltip">File Manger</span>
      </li>
      <li>
        <Link href="#">
        <i class="bx bx-calendar"></i>

          <span className="link_name">Schedule</span>
        </Link>
        <span className="tooltip">Order</span>
      </li>
      <li>
        <Link href="#">
          <i className="bx bx-cog"></i>
          <span className="link_name">Settings</span>
        </Link>
        <span className="tooltip">Settings</span>
      </li>
     
    </ul>
  </div>
  </Container>
</>
  )
}
const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');



*{
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  min-height: 100vh;
}

.sidebar{
  min-height: 100vh;
  width: 78px;
  padding: 6px 14px;
  z-index: 99;
  transition: all .5s ease;
  position: fixed;
  top:0;
  left: 0;
  background-color : blue;
  color : white 
}

.sidebar.open{
  width: 280px;
}

.sidebar .logo_details{
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.sidebar .logo_details .icon{
  opacity: 0;
  transition: all 0.5s ease ;
}



.sidebar .logo_details .logo_name{
  color:var(--color-white);
  font-size: 22px;
  font-weight: 600;
  opacity: 0;
  transition: all .5s ease;
}

.sidebar.open .logo_details .icon,
.sidebar.open .logo_details .logo_name{
  opacity: 1;
}

.sidebar .logo_details #btn{
  position: absolute;
  top:50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all .5s ease;
}

.sidebar.open .logo_details #btn{
  text-align: right;
}

.sidebar i{
color : white;
  height: 60px;
  line-height: 60px;
  min-width: 50px;
  font-size: 25px;
  text-align: center;
}

.sidebar .nav-list{
  margin-top: 20px;
  height: 100%;
}

.sidebar li{
  position: relative;
  margin:8px 0;
  list-style: none;
}

.sidebar li .tooltip{
  position: absolute;
  top:-20px;
  left:calc(100% + 15px);
  z-index: 3;
  background-color: var(--color-white);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 14px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}

.sidebar li:hover .tooltip{
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top:50%;
  transform: translateY(-50%);
}

.sidebar.open li .tooltip{
  display: none;
}



.sidebar li a{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-default);
  position: relative;
  transition: all .5s ease;
  z-index: 12;
  color : white;

}

.sidebar li a::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  background-color: var(--color-white);
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  transform-origin: left;
  z-index: -2;
}

.sidebar li a:hover::after{
  transform: scaleX(1);
  color:var(--color-default)
}

.sidebar li a .link_name{
  color:var(--color-blue);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  pointer-events: auto;
  transition: all 0.4s ease;
  pointer-events: none;
  opacity: 0;
}

.sidebar li a:hover .link_name,
.sidebar li a:hover i{
  transition: all 0.5s ease;
  color:var(--color-default)
}

.sidebar.open li a .link_name{
  opacity: 1;
  pointer-events: auto;
}

.sidebar li i{
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  border-radius: 5px;
}

.sidebar li.profile{
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom:-8px;
  padding:10px 14px;
  overflow: hidden;
  transition: all .5s ease;
}

.sidebar.open li.profile{
  width: 250px;
}

.sidebar .profile .profile_details{
  display: flex;
  align-items: center;
  flex-wrap:  nowrap;
}

.sidebar li img{
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.sidebar li.profile .name,
.sidebar li.profile .designation{
  font-size: 15px;
  font-weight: 400;
  color:var(--color-white);
  white-space: nowrap;
}

.sidebar li.profile .designation{
  font-size: 12px;
}

.sidebar .profile #log_out{
  position: absolute;
  top:50%;
  right: 0;
  transform: translateY(-50%);
  background-color: var(--color-second);
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .profile #log_out{
  width: 50px;
  background: none;
}

.home-section{
  position: relative;
  background-color: var(--color-body);
  min-height: 100vh;
  top:0;
  left:78px;
  width: calc(100% - 78px);
  transition: all .5s ease;
  z-index: 2;
}

.home-section .text{
  display: inline-block;
  color:var(--color-default);
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}

.sidebar.open ~ .home-section{
  left:250px;
  width: calc(100% - 250px);
}

`;
export default SidebarApplicant