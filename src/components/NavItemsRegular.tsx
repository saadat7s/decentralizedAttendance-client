import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

function NavItemsRegular({ title, link }: { title: string, link: string }) {
    const location = useLocation();
    let currentLink = location.pathname;
    const navigate = useNavigate();
    return (
        <Button
            variant={currentLink === link ? 'contained' : 'text'}
            onClick={() => navigate(link)}
        >
            {title}
        </Button>
    )
}

export default NavItemsRegular