import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  user:any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children , user }) => {
 return user ? children : <Navigate to="/adminLogin"/>
};

export default ProtectedRoute;
