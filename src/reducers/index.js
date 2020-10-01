import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';


const booksReducer = () => {
    return [
        {
            title: 'War and Peace',
            bookCover: 'https://images.penguinrandomhouse.com/cover/9781400079988',
            author: 'Leo Tolstoy',
            description: 'he novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. Portions of an earlier version, titled The Year 1805, were serialized in The Russian Messenger from 1865 to 1867, then published in its entirety in 1869.',
            bookId: uuidv4(),
        },
        {
            title: 'Don Quixote',
            bookCover: 'https://m.media-amazon.com/images/I/51iQq6ZYedL.jpg',
            author: 'Miguel de Cervantes',
            description: 'The plot revolves around the adventures of a noble (hidalgo) from La Mancha named Alonso Quixano, who reads so many chivalric romances that he loses his mind and decides to become a knight-errant (caballero andante) to revive chivalry and serve his nation, under the name Don Quixote de la Mancha. He recruits a simple farmer, Sancho Panza, as his squire, who often employs a unique, earthy wit in dealing with Don Quixote\'s rhetorical monologues on knighthood, already considered old-fashioned at the time.',
            bookId: uuidv4(),
        },
        {
            title: 'Hamlet',
            bookCover: 'https://cdn.usborne.com/catalogue/covers/eng/max_covers/9780746096116.JPG?width=960&mode=min',
            author: 'William Shakespeare',
            description: 'Hamlet is considered among the most powerful and influential works of world literature, with a story capable of "seemingly endless retelling and adaptation by others". It was one of Shakespeare\'s most popular works during his lifetime and still ranks among his most performed, topping the performance list of the Royal Shakespeare Company and its predecessors in Stratford-upon-Avon since 1879. It has inspired many other writers—from Johann Wolfgang von Goethe and Charles Dickens to James Joyce and Iris Murdoch—and has been described as "the world\'s most filmed story after Cinderella".',
            bookId: uuidv4(),
        },
        {
            title: 'The Hard Thing About Hard Things',
            bookCover: 'https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL._SX329_BO1,204,203,200_.jpg',
            author: 'Ben Horowitz',
            description: 'While many people talk about how great it is to start a business, very few are honest about how difficult it is to run one. Ben Horowitz analyzes the problems that confront leaders every day, sharing the insights he’s gained developing, managing, selling, buying, investing in, and supervising technology companies. A lifelong rap fanatic, he amplifies business lessons with lyrics from his favorite songs, telling it straight about everything from firing friends to poaching competitors, cultivating and sustaining a CEO mentality to knowing the right time to cash in.',
            bookId: uuidv4(),
        },
        {
            title: 'Around the World in 80 Days',
            bookCover: 'https://images-na.ssl-images-amazon.com/images/I/51twTD7NDXL._SX318_BO1,204,203,200_.jpg',
            author: 'Jules Verne',
            description: 'The story starts in London on Wednesday, 2 October 1872.\n' +
                '\n' +
                'Phileas Fogg is a rich British gentleman living in solitude. Despite his wealth, Fogg lives a modest life with habits carried out with mathematical precision. Very little can be said about his social life other than that he is a member of the Reform Club, where he spends much of every day. Having dismissed his former valet, James Forster, for bringing him shaving water at 84 °F (29 °C) instead of 86 °F (30 °C), Fogg hires Frenchman Jean Passepartout as a replacement.\n' +
                '\n' +
                'At the Reform Club, Fogg gets involved in an argument over an article in The Daily Telegraph stating that with the opening of a new railway section in India, it is now possible to travel around the world in 80 days. He accepts a wager for £20,000 (£2,242,900 in 2019), half of his total fortune, from his fellow club members to complete such a journey within this time period. With Passepartout accompanying him, Fogg departs from London by train at 8:45 p.m. on 2 October; in order to win the wager, he must return to the club by this same time on 21 December, 80 days later. They take the remaining £20,000 of Fogg\'s fortune with them to cover expenses during the journey.',
            bookId: uuidv4(),
        },
    ];
}

const selectedBookReducer = (selectedBook = null, action) => {
    if (action.type === 'SELECTED_BOOK') {
        return action.payload;
    }
    return selectedBook;
}

export default combineReducers({
    books: booksReducer,
    selectedBook: selectedBookReducer
})