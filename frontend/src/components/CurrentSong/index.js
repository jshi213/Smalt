import React, { useContext } from "react";
import styles from "./style.module.css";
import { Table, TableBody } from "@material-ui/core";
import { PlaylistContext } from "../../playlist-context";

const ENDPOINT = "http://localhost:3001/";

export default function CurrentSong() {
    const [playlist, setPlaylist] = useContext(PlaylistContext);

    // return (
    //     <>
    //         <Table className={styles.table}>
    //             <TableBody>
    //                 <TableRow className={styles.tableRow}>
    //                     <TableCell className={styles.tableCell}>
    //                         <Avatar
    //                             variant="rounded"
    //                             src={song.imageURL}
    //                             className={styles.image}
    //                         />
    //                     </TableCell>
    //                     <TableCell className={styles.tableCellHead}>
    //                         <div className={styles.songName}>{song.name}</div>
    //                         <div className={styles.songArtist}>{song.artists}</div>
    //                         <div className={styles.songArtist}>{song.upVoteCount}</div>
    //                     </TableCell>
    //                 </TableRow>
    //             </TableBody>
    //         </Table>
    //     </>
    // );
}
