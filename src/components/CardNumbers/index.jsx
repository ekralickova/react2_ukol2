import { useState, useRef, useEffect } from 'react'
import './style.css';

export const CardNumbers = () => {

    const [numbers, setNumbers] = useState(['', '', '', '']);
    const [activeIndex, setActiveIndex] = useState(0);
    const numberInputRef = useRef();

    useEffect(() => {
        if (document.activeElement !== numberInputRef.current) {
            numberInputRef.current.focus();
        }
    }
        , [activeIndex]);

    const handleChange = (i) => {
        if (numberInputRef.current.value.length === 4 && activeIndex < 3) {
            setActiveIndex((prev) => prev + 1);
        }
        if (numberInputRef.current.value.length <= 4) {
            const novePole = [...numbers];
            console.log("pridavam" + novePole.splice(i, 1, numberInputRef.current.value));
            setNumbers(novePole);
        }
    }

    return (
        <div className="stage">
            <div className="stage__numbers">
                {numbers.map((number, i) => {
                    return (
                        <input
                            key={i}
                            className="number"
                            type="text"
                            value={number}
                            onChange={() => handleChange(i)}
                            ref={activeIndex === i ? numberInputRef : null}
                        >
                        </input>
                    )
                })}
            </div>
        </div>
    );
};
