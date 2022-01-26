import React, {useContext} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function AdminPage() {

    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div>
            <h2>
                This is Admin Page
            </h2>

            <p style={{
                color: `${theme.textheader}`,
                background: `${theme.bg}`
            }}
               className={'header__profile-data'}
               onClick={logoutHandler}>
                Выйти</p>

            <Button onClick={() => toggleTheme()}>
                {theme === dark ?  '🌙'  : '☀️'}
            </Button>


        </div>
    );
}

export default AdminPage;