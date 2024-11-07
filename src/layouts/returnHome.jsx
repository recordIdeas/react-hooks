import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from 'antd';

export default function ReturnHome() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/');

  return  (
    <>
      <Breadcrumb
        className="breadcrumbs"
        items={[
          {
            title: <a href="./home">Return Home</a>,
          },
          {
            title: pathSnippets[1],
          },
        ]}
      />

      <main>
        <div className="container">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}