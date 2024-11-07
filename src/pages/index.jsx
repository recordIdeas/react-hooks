import { Link } from "react-router-dom";

export default function Hooks() {
  return (
    <main>
      <div className="container">
        <ul>
          <li><Link to="/userLayoutEffect">userLayoutEffect</Link></li>
          <li><Link to="/useEffect">useEffect</Link></li>
          <li><Link to="/useTransition">useTransition</Link></li>
          <li><Link to="/useCallback">useCallback</Link></li>
          <li><Link to="/useContext">useContext</Link></li>
          <li><Link to="/useReducer">useReducer</Link></li>
          <li><Link to="/useImmerReducer">useImmerReducer</Link></li>
          <li><Link to="/useDefferedValue">useDefferedValue</Link></li>
          <li><Link to="/useMemo">useMemo</Link></li>
        </ul>
      </div>
    </main>
  )
}