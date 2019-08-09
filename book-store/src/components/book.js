import React, { useState, useEffect } from 'react';

export default function Book({ title, img }) {
    const [highlight, setHighlight] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [checked, setCheck] = useState(false);
    useEffect(() => {
        if (title.includes('2')) {
            const startIndex = title.indexOf('2');
            setNewTitle(`${title.slice(0, startIndex)}${title.slice(startIndex, startIndex + 5).toUpperCase()}${title.slice(startIndex + 5)}`);
        }
        if (title.includes('1')) {
            setHighlight(true);
        }
    }, []);

    return (
        <div className="book-container">
            <div className="title-container">
                <h4>{title}</h4>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => setCheck(!checked)}>{}</input>
            </div>
            <h6 className={highlight ? 'highlighted' : ''}>{title}</h6>
            <img
                src={img}
                alt={title}
            />
        </div>
    );
}