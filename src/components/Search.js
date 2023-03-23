import React from 'react'
import { FcSearch } from "react-icons/fc";

function Search(currencies) {
    const [ filterByCurrency, setFilterByCurrency ] = useState ('');
    const [currency, setCurrency] = useState('')

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = Object.keys(currencies).filter((currency) => {
            return user.Currency.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          })

          setFilterByCurrency(results);
        } else {
         setFilterByCurrency(USERS);
          // If the text field is empty, show all users
        }
    
        setCurrency(keyword);
      };

  return (

    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
        <input
        type="search"
        value={Currency}
        onChange={filter}
        classCurrency="input"
        placeholder="Filter"
      />

           <FcSearch />
        </div>
      </div>
      </div>
    
  )
}

export default Search