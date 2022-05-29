import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../utils/context/AuthContext";

export default function PrivRoute({ children }) {
  const [auth, setAuth] = useContext(AuthContext);

  return auth ? <>{children}</> : <Navigate to="/" />;
}
