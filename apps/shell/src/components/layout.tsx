import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  appPostingBasename,
  approvalBasename,
  appMeetingBasename,
  appPropertyBasename,
  appMainBasename
} from "../constants/prefix";
import { Icon } from "@real-estate/ui-kit";




const Layout = () => {
  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
          <div style={{ width: '200px', height: '80px', overflow: 'hidden' }}>
          <img
    src={Icon.Logo}
    alt="Logo"
    style={{
      width: '100%', // 이미지 너비를 130%로 설정
      height: '100%', // 이미지 높이를 130%로 설정
      position: 'relative',
    
    }}
  />
      </div>
            
          </Link>
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appPostingBasename}`}
                >
                  <Icon.FaPen/>
                  <span className="global-nav-link-text">포스팅</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${approvalBasename}`}
                >
                  <Icon.FaCheckCircle/>
                  <span className="global-nav-link-text">결재</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appMeetingBasename}`}>
                  <Icon.UserFriends />
                  <span className="global-nav-link-text">미팅</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appPropertyBasename}`}>
                  <Icon.FaBuilding />
                  <span className="global-nav-link-text">부동산</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appMainBasename}`}>
                  <Icon.Home />
                  <span className="global-nav-link-text">메인</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
