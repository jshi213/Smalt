import React from 'react';
import axios from "axios";
import styles from "./style.module.css";
import { Button, TextField, makeStyles, MenuItem, Menu, Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    backButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "18px 40px",
        width: "30%",
        fontSize: 18,
    },
    textField: {
        background: "#595959",
        width: "300px",
        fontSize: 18,
        color: "white",
        margin: "10px"
    },
    menuButton: {
        background: "#30A0F5",
        borderRadius: 30,
        width: "30%",
        padding: "18px 40px",
        fontSize: 18,

    },
    table: {
        width: 300,
        background: "#595959",
        margin: "10px",
    },
    showPlayListButton: {
        background: "#30A0F5",
        borderRadius: 30,
        width: "60%",
        padding: "18px 40px",
        fontSize: 18,
    },
});


export default function HomePage() {

    const classes = useStyles();

    const [searchTerm, setSearchTerm] = React.useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [playList, setPlayList] = React.useState(null);

    const [tableAnchorEl, setTableAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleBack = () => {
        console.log('login');
    };

    const handleSearch = async (searchTerm) => {
        setSearchTerm(searchTerm);

        if(searchTerm !== "") {
            console.log(searchTerm);
        }
        //const response = await axios.get('http://localhost:3001/users/auth', { params: { searchTerm: val } });
    };

    const openTable = Boolean(tableAnchorEl);

    return (
        <div className={styles.rootContainer}>
            <div class="subdiv_allinline">
                <Button classes={{ root: classes.backButton }}
                    onClick={handleBack}>Back
                </Button>
                <Button className={styles.menuButton}
                    classes={{ root: classes.menuButton }}
                    onClick={handleOpenMenu}
                    aria-controls="menu-list"
                    aria-haspopup="true"
                >
                    Open Menu
                </Button>
                <Menu
                    id="menu-list"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>

            <div className={styles.bodyPartContainer}>
                <form>
                    <TextField
                        aria-controls="songs-list"
                        aria-haspopup="false"
                        classes={{ root: classes.textField }}
                        id="standard-basic"
                        variant="outlined"
                        size="large"
                        label="Search songs"
                        onChange={val => handleSearch(val.target.value)}
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                    <p className={styles.paraStyle}>Playlist {playList ? 'is below' : 'is empty, please add songs'}</p>
                    <Table classes={{ root: classes.table }}>
                        <TableBody className={styles.tableStyle}>
                            <TableRow style={{ backgroundColor: '#333333' }} className={styles.tableStyle}>
                                <TableCell style={{ borderBottom: "none", color: "white", fontSize: "18pt" }} align="centre">Want you</TableCell>
                                <TableCell style={{ borderBottom: "none", color: "white" }} align="centre" rowSpan={2}>
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00004851c34e9b33adb0030233a6efef"
                                        className={styles.image}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow style={{ backgroundColor: '#333333' }}>
                                <TableCell style={{ borderBottom: "none", color: "white" }} align="centre">Kanine</TableCell>


                            </TableRow>
                        </TableBody>
                    </Table>

                    <Table classes={{ root: classes.table }}>
                        <TableBody >
                            <TableRow style={{ backgroundColor: '#333333' }}>
                                <TableCell style={{ borderBottom: "none", color: "white", fontSize: "18pt" }} align="centre">Song</TableCell>
                                <TableCell style={{ borderBottom: "none", color: "white" }} align="centre" rowSpan={2}>
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e024719d135efa3d7567c0d7faa"
                                        className={styles.image}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow style={{ backgroundColor: '#333333' }}>
                                <TableCell style={{ borderBottom: "none", color: "white" }} align="centre">Artist</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
            </div>

        </div >
    );
}