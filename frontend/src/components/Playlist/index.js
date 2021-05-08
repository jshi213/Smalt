import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import socketIOClient from "socket.io-client";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';

const ENDPOINT = "http://localhost:3001/";
export default function Playlist() {

  const [data, setResponse] = useState("");
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("heresASong", data => {
      setResponse(data);
    });
    socket.on('WhichRoom', function () {
      console.log("recieved request for room");
      socket.emit('SpecifyRoom', { my: 'data' });

    });
  }, [])

  const [likeButtonColor, setLikeButtonColor] = useState('inherit');

  const handleLikeButton = () => {
    if (likeButtonColor !== 'inherit'){
      setLikeButtonColor('inherit');
    }else{
      setLikeButtonColor('secondary');
    }
  }


  return (
    <>
      <Table className={styles.table} size="small">
        <TableBody>
          <>
            <TableRow className={styles.tableRow}>
              <TableCell className={styles.tableCellImg} rowSpan={2}>
                <img
                  src={data.src}
                  className={styles.image}
                />
              </TableCell>
              <TableCell className={styles.tableCellHead}>
                {data.name}
              </TableCell>
              <TableCell className={styles.tableCellDate} rowSpan={2}>
                YYYY-MM-DD
              </TableCell>
              <TableCell className={styles.tableCellLikeButton} rowSpan={2}>
                <IconButton onClick={handleLikeButton} color={likeButtonColor}><FavoriteIcon /></IconButton>
              </TableCell>
            </TableRow>
            <TableRow className={styles.tableRow}>
              <TableCell className={styles.tableCell}>{data.artist}</TableCell>
            </TableRow>
          </>
        </TableBody>
      </Table>
    </>
  );
}
