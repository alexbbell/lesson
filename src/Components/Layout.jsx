import React, {Component}  from 'react';

import { NavLink, Outlet } from 'react-router-dom'

const setActive =   ( {isActive}) => isActive ? 'active-link' : '' ;

export const Layout = () => {
  


  return (
    <>

      <header>
          <NavLink className={setActive } to="/">Home</NavLink> |
          <NavLink  className={ setActive } to="/blog">Blog</NavLink> |
          <NavLink className={ setActive } to="/about">About</NavLink> | 
          <NavLink className={ setActive } to="/blog/new">Create Page</NavLink> | 
          <NavLink className={ setActive } to="/login">Login</NavLink>
      </header>

      <Outlet></Outlet>
      <footer>2023</footer>
      </>
  )
}
