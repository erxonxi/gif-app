import { useState } from 'react';

const AddCategory = ( { setCategories } ) => {

    const [ value, setValue ] = useState( '' );

    const handleValue = ( e ) => {
        setValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( value.trim().length > 2 ) {
            setCategories( cats => [ ...cats, value ] );
            setValue( '' )
        }

    }

    return (
        <form onSubmit={ handleSubmit } >
            <input
                type="text"
                value={ value }
                onChange={ handleValue }
            />
        </form>
    )
}

export default AddCategory;