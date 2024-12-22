import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { getUserProfile } from "../redux/features/userSlice";
import { jwtDecode } from "jwt-decode";
import Unauthorized from "../components/Unauthorized";
import { CircularProgress, Stack, Typography } from "@mui/material";

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        const { isAuthenticated, userProfile } = useSelector((state: RootState) => state.user);
        const dispatch = useDispatch<AppDispatch>();
        const token: string | null = localStorage.getItem('x_auth_token');
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            if (!isAuthenticated && token) {
                dispatch(getUserProfile());
                return;
            }
            if (!token) {
                if (location.pathname.startsWith('/teacher')) {
                    navigate('/teacher/login')
                }
                else if (location.pathname.startsWith('/student')) {
                    navigate('/student/login')
                }
                else if (location.pathname.startsWith('/admin')) {
                    navigate('/admin/login');
                }
            }

        }, [token, isAuthenticated]);


        if (isAuthenticated) {

            if (!userProfile.role) {
                return (
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <CircularProgress />
                    </Stack>
                )
            }

            if (userProfile.role === 'teacher' && location.pathname.startsWith('/teacher')) {
                return <Component {...props} />;
            }
            else if (userProfile.role === 'student' && location.pathname.startsWith('/student')) {
                return <Component {...props} />;
            }
            else if (userProfile.role === 'admin' && location.pathname.startsWith('/admin')) {
                return <Component {...props} />;
            }
            return <Unauthorized />;
        }
        return null;
    };
}
