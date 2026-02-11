'use client';
import { useState } from 'react';
import styles from './demo.module.css';
export default function Demo() {
    const [directorName, setDirectorName] = useState('');
    const [movieName, setMovieName] = useState('');
    const [directors, setDirectors] = useState([]);
    const [movies, setMovies] = useState([]);

    const handleAdd = () => {
        if (directorName.trim() && movieName.trim()) {
            setDirectors([...directors, directorName.trim()]);
            setMovies([...movies, movieName.trim()]);
            setDirectorName('');
            setMovieName('');
        }
    };

    const handleRemove = (index) => {
        setDirectors(directors.filter((_, i) => i !== index));
        setMovies(movies.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Director and Movies</h1>

            <div className={styles.inputSection}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Director Name"
                    value={directorName}
                    onChange={(e) => setDirectorName(e.target.value)}

                />
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Movie Name"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}

                />
                <button className={styles.addButton} onClick={handleAdd}>
                    Add
                </button>
            </div>

            <div className={styles.listSection}>
                <div className={styles.column}>
                    {directors.map((director, index) => (
                        <div key={index} className={styles.listItem}>
                            {director}
                        </div>
                    ))}
                </div>
                <div className={styles.column}>
                    {movies.map((movie, index) => (
                        <div key={index} className={styles.listItem}>
                            {movie}
                        </div>
                    ))}
                </div>
                <div className={styles.column}>
                    {movies.map((_, index) => (
                        <button
                            key={index}
                            className={styles.removeButton}
                            onClick={() => handleRemove(index)}
                        >
                            Remove
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
