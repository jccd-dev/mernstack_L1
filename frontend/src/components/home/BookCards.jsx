import PropTypes from 'prop-types';
import Card from './Card';

const BookCards = ({ books }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <Card key={item._id} item={item} />
            ))}
        </div>
    )
}

BookCards.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookCards