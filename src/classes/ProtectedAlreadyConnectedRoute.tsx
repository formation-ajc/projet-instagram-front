import { Navigate } from "react-router-dom";
import {ReactElement} from "react";
import User from "./User";

export type ProtectedRouteProps = {
    children?: ReactElement | ReactElement[]
}

/**
 * Route pour empecher d'aller au login si deja connecte
 * @param children
 * @constructor
 */
const ProtectedAlreadyConnectedRoute = ({ children }: ProtectedRouteProps) => {
    const user  = User.getUser();
    if (!(Object.keys(user).length === 0)) {
        return <Navigate to="/" />;
    }
    return (
        <>
            {children}
        </>
    );
};

export default ProtectedAlreadyConnectedRoute;