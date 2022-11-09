import { MagnifyingGlass } from 'phosphor-react';
import React, { Dispatch, useCallback, useState } from 'react';
import { BookSearchInputContainer, SearchInput } from './styles';

interface BookSearchInputProps {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  searchBook: () => void;
}

const BookSearchInput: React.FC<BookSearchInputProps> = ({
  search,
  setSearch,
  searchBook,
}) => {
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
          // onKeyDown={searchBook}
        />
      </SearchInput>
    </BookSearchInputContainer>
  );
};

export default BookSearchInput;
