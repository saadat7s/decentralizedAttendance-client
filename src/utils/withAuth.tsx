import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { getUserProfile } from "../redux/features/userSlice";


export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        const { isAuthenticated } = useSelector((state: RootState) => state.user)
        const dispatch = useDispatch<AppDispatch>();
        const token = localStorage.getItem('x_auth_token');
        let decoded: { id: string, role: string };
        decoded = jwtDecode(token!);
        const navigate = useNavigate();
        useEffect(() => {
            console.log("ENDPOINT: ", process.env.REACT_APP_ENDPOINT)
            if (!isAuthenticated && token) {
                dispatch(getUserProfile());
                return
            }
            if (!token) {
                navigate('/admin/login');
            }
        }, [token])
        if (isAuthenticated) {
            return <Component {...props} />
        }
        return null;
    }
}