// Estilo
import './GifApp.css';

import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {

    const [ categories, setCategories ] = useState([]);

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
            { categories.map( category => (
                <>
                <GifGrid key={ category } category={ category } />
                </>
            ))}
            </ol>

        </>
    )
}

export default GifApp;