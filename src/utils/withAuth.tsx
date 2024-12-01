import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { getUserProfile } from "../redux/features/userSlice";

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        const { isAuthenticated } = useSelector((state: RootState) => state.user);
        const dispatch = useDispatch<AppDispatch>();
        const token: string | null = localStorage.getItem('x_auth_token');
        const navigate = useNavigate();

        useEffect(() => {
            if (!isAuthenticated && token) {
                dispatch(getUserProfile());
                return;
            }
            if (!token) {
                navigate('/admin/login');
            }
        }, [token, isAuthenticated]);

        if (isAuthenticated) {
            return <Component {...props} />;
        }
        if (!token && !isAuthenticated) {
            navigate('/admin/login');
        }
        return null;
    };
}
