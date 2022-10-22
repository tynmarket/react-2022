import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ color: 'red' }}>レイアウト</div>
      <Outlet />
    </>
  );
}

export default Layout;
