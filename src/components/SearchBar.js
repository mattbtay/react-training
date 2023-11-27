import {useState} from 'react';
import { Input } from '@chakra-ui/react'

const SearchBar = ({firstName, lastName, onSearchBarChange}) => {

    // SearchTerm = variable, setSearchTerm = function
    const [searchTerm, setSearchTerm ] = useState('');

    const onInputChange = (value) => {
        setSearchTerm(value)
        console.log(searchTerm)
        onSearchBarChange(value)
    }

    return (
        <div className="search">
            <Input
                size='md'
                onChange={e => {onInputChange(e.target.value)}}
                value={searchTerm}
                type="text"
            />
            <p>{firstName} {lastName}'s Search Bar</p>
        </div>
    );
}

export default SearchBar;