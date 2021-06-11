import React from 'react'
import Home from './Home';
import Test from './Test';
import NotFound from './NotFound';
import Login from './Login'


const routers =
  [
    {
      id: 1,
      path: "/test",
      name: "Test",
      component: Test,
      isExact: true,
      isOnMenu: false,
      rolesAllowed: [],
      private: true,
    },
    {
      id: 2,
      path: "/",
      name: "Home",
      component: Home,
      isExact: true,
      isOnMenu: false,
      rolesAllowed: [],
      private: false,
    },
    {
      id: 3,
      path: "/test/:id",
      name: "Test-1",
      component: Test,
      isExact: true,
      isOnMenu: false,
      rolesAllowed: [],
      private: true,
    },
    {
      id: 4,
      path: "/login",
      name: "Login",
      component: Login,
      isExact: true,
      isOnMenu: false,
      rolesAllowed: [],
      private: false,
    },
    {
      id: 5,
      path: "*",
      name: "NotFound",
      component: NotFound,
      isExact: true,
      isOnMenu: false,
      rolesAllowed: [],
      private: false,
    },
  ];

export default routers;