import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastOfMovie } from 'Api';
import defaultPerson from '../../images/defaultPerson.png'

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w200';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCastOfMovie(movieId);
        setCast(response.cast);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
    }, [movieId]);
    
    return (
        <>
        <ul>
          {cast.length === 0 ? (
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              No information about the cast
            </p>
          ) : (
            cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <div>
                    <img
                      src={
                        profile_path
                          ? `${BASE_URL}${IMG_SIZE}${profile_path}`
                          : defaultPerson
                      }
                        alt={name}
                        style={{ width: '200px' }}
                    />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })
          )}
</ul></>
    );
};