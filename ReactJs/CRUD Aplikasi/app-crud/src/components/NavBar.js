
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
    background: #808080;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 25px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/">CRUD APP</Tabs>
                <Tabs to="/all">Semua Data</Tabs>
                <Tabs to="/add">Tambah Data</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;