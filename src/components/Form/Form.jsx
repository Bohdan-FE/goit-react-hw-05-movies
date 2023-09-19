import { FormStyled } from 'page/Movies/Movies.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Form() {
  const [, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  return (
    <FormStyled
      action="submit"
      onSubmit={e => {
        e.preventDefault();
        setSearchParams({ query });
      }}
    >
      <input
        type="text"
        name="query"
        placeholder="search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>Search</button>
    </FormStyled>
  );
}

export default Form;
