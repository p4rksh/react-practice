import React from 'react';
import Book from '../components/book';
import Mars1 from '../assets/images/다운로드.jpeg';
import Mars2 from '../assets/images/mars-methane.jpg';
import Mars3 from '../assets/images/OSIRIS_Mars_true_color.jpg';

const bookList = [
    {
        title: 'Mars1',
        img: Mars1
    },
    {
        title: 'Mars2',
        img: Mars2
    },
    {
        title: 'Mars3',
        img: Mars3
    }
];

export function Home() {
    return (
        <div className="App">
            <h1>Book Store</h1>
            <section>
                <p>Sample Book Store</p>
                {bookList.map(({ title, img}) => (
                    <Book
                        key={title}
                        title={title}
                        img={img}
                    />
                ))}
            </section>
        </div>
    );
}