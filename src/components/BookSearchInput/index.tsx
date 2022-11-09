import { MagnifyingGlass } from 'phosphor-react';
import React, { useCallback, useState } from 'react';
import { BookSearchInputContainer, SearchInput } from './styles';

const BookSearchInput: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <BookSearchInputContainer>
      <SearchInput isFocused={isFocused}>
        <MagnifyingGlass size={20} />
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Pesquisar livros"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </SearchInput>
    </BookSearchInputContainer>
  );
};

export default BookSearchInput;
