import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';
const ProtectRoute = ({children}) => {
  const { user } = useSelector(store => store.user);
  const location = useLocation();
  if(!user){
    return <Navigate to="/login" state={{from:location}} replace/>
  }
  return children
}

export default ProtectRoute
