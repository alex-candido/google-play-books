import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsHeader from './components/DetailsHeader';
import { BookDetailsContainer, DetailsContent } from './styles';

const BookDetails: React.FC = () => {
  // const { bookDetail } = useParams();
  // const {  } = useBooks();
  // console.log(id);

  const location = useLocation();
  const book = location.state.details;

  return (
    <BookDetailsContainer>
      <div className="container">
        <DetailsHeader book={book} />
        <DetailsContent />
      </div>
    </BookDetailsContainer>
  );
};

export default BookDetails;
