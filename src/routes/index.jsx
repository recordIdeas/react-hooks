import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import BaseLayout from '../layouts';
import ReturnHomeLayout from '../layouts/returnHome';
import NotFound from '../layouts/notfound';

const Home = lazy(() => import("../pages"));

const UserLayoutEffect = lazy(() => import("../pages/userLayoutEffect"));
const UseEffect = lazy(() => import("../pages/useEffect"));
const UseTransition = lazy(() => import("../pages/useTransition"));
const UseCallback = lazy(() => import("../pages/useCallback"));
const UseContext = lazy(() => import("../pages/useContext"));
const UseReducer = lazy(() => import("../pages/useReducer"));
const UseImmerReducer = lazy(() => import("../pages/useImmerReducer"));
const UseDefferedValue = lazy(() => import("../pages/useDefferedValue"));
const UseMemo = lazy(() => import("../pages/useMemo"));


export default [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={null}><Home /></Suspense>
      },
      {
        path: "/home",
        element: <Navigate to="/" />
      },
      {
        element: <ReturnHomeLayout />,
        children: [
          {
            path: "/userLayoutEffect",
            element: <Suspense fallback={null}><UserLayoutEffect /></Suspense>
          },
          {
            path: "/useEffect",
            element: <Suspense fallback={null}><UseEffect /></Suspense>
          },
          {
            path: "/useTransition",
            element: <Suspense fallback={null}><UseTransition /></Suspense>
          },
          {
            path: "/useCallback",
            element: <Suspense fallback={null}><UseCallback /></Suspense>
          },
          {
            path: "/useContext",
            element: <Suspense fallback={null}><UseContext /></Suspense>
          },
          {
            path: "/useReducer",
            element: <Suspense fallback={null}><UseReducer /></Suspense>
          },
          {
            path: "/useImmerReducer",
            element: <Suspense fallback={null}><UseImmerReducer /></Suspense>
          },
          {
            path: "/useDefferedValue",
            element: <Suspense fallback={null}><UseDefferedValue /></Suspense>
          },
          {
            path: "/useMemo",
            element: <Suspense fallback={null}><UseMemo /></Suspense>
          },
          {
            path: "*",
            element: <NotFound />
          }
        ]
      }
    ]
  }
];