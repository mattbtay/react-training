import {useState} from 'react';
import { Input } from '@chakra-ui/react'
import useUpdateLogger from '../hooks/use-update-logger';

const SearchBar = ({firstName, lastName, onSearchBarChange}) => {

    // SearchTerm = variable, setSearchTerm = function
    const [searchTerm, setSearchTerm ] = useState('');

    useUpdateLogger(searchTerm, 'Search Query')

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
        </div>
    );
}

export default SearchBar;