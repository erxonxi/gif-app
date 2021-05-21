import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [ images, setImages ] = useState([]);

    useEffect( () => {
        getGifs(category)
    }, []);

    const getGifs = async ( category ) => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=GhVJtnlkgLiT0Ev4NfClu1BGa44h4avr&q=' + category + '&limit=3';
        console.log(url);
        const res = await fetch( url );
        const { data } = await res.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        setImages( gifs );

    };

    return (
        <div>
            <h3>{ category }</h3>
            <ol className="card-grid" >
            { images.map( img => (
                <GifGridItem key={ img.id } { ...img } />
            ))}
            </ol>
        </div>
    )
}

export default GifGrid;