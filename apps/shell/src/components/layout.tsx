import React from "react";
import { Link, Outlet } from "react-router-dom";
import { appPostingBasename } from "../constants/prefix";

const Layout = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <span>shell 리엑트</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={`${appPostingBasename}`}>포스팅 홈 쉘</Link>
              </li>
              <li>
                <Link to={`${appPostingBasename}/1`}>포스팅 1 쉘</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
