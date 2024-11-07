import { Outlet } from "react-router-dom";

import HeaderComponent from '../components/header';

export default function Base() {
  return  (
    <>
      <HeaderComponent />

      <Outlet />
    </>
  )
}