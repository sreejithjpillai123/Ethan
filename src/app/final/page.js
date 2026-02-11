'use client'
import { useState } from "react";
import styles from "./final.module.css";
export default function Final() {
    const [director, setdirector] = useState("");
    const [movie, setmovie] = useState("");
    const [directors, setdirectors] = useState([]);
    const [movies, setmovies] = useState([]);
    const handleAdd = () => {
        if (director.trim() && movie.trim()) {
            setdirectors([...directors, director])
            setmovies([...movies, movie])
            setdirector('')
            setmovie('')
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Director and Movies</h1>
            </div>

            <div className={styles.inputSection}>
                <input className={styles.input} type="text" placeholder="Director Name" value={director} onChange={(e) => setdirector(e.target.value)} />
                <input className={styles.input} type="text" placeholder="Movie Name" value={movie} onChange={(e) => setmovie(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>



            <div className={styles.listSection}>
                <div className={styles.colunmn}>
                    {directors.map((directorr, index) => (
                        <div className={styles.input} key={index}>
                            {directorr}
                        </div>
                    ))}
                </div>
                <div className={styles.colunmn}>
                    {movies.map((movie, index) => (
                        <div className={styles.input} key={index}>{movie}</div>
                    ))}
                </div>
            </div>
        </div>

    )
}