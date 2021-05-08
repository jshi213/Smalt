import React, { useState } from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite'

import {
    Avatar,
    TableCell,
    TableRow,
  } from "@material-ui/core";

export default function Song(props) {
    console.log("I was called");
    const song = props.props;
    const [likeButtonColor, setLikeButtonColor] = useState("disabled");
    function handleLikeButton() {
        if(likeButtonColor !== "disabled"){
            setLikeButtonColor("secondary");
        }else{
            setLikeButtonColor("disabled");
        }

    }
    return (
        <>
            <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCell} rowSpan={2}>
                    <Avatar
                        variant="rounded"
                        src={song.imageURL}
                        className={styles.image}
                    />
                </TableCell>
                <TableCell className={styles.tableCellHead}>
                    <div className ={styles.songName} >{song.name}</div>
                    <div className ={styles.songArtist}>{song.artists}</div>
                </TableCell>
                <TableCell className={styles.tableCell} rowSpan={2}>
                    <IconButton onClick={handleLikeButton} color={likeButtonColor}><FavoriteIcon /></IconButton>
                </TableCell>
            </TableRow>
        </>
    );
}


