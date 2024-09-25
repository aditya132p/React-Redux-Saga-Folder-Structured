
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated
    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Navigate to="/login" replace /> // Redirect to login if not authenticated
                )
            }
        />
    );
};

export default PrivateRoute;
