import React, { useState, useEffect } from 'react';

const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
};


const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

function Performance() {
    const [text, setText] = useState('');
    const [scrollY, setScrollY] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
        console.log("Debounced input:", e.target.value);
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
        console.log("Throttled Scroll Y:", window.scrollY);
    };


    const debouncedChange = debounce(handleChange, 900);
    const throttledScroll = throttle(handleScroll, 5000);

    useEffect(() => {
        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    return (
        <div>
            <h2>Debounce Example (Input)</h2>
            <input
                type="text"
                placeholder="Type here..."
                onChange={debouncedChange}
                style={{ padding: '10px', width: '300px' }}
            />
            <p>Typed Value: {text}</p>

            <h2 style={{ marginTop: '50px' }}>Throttle Example (Scroll)</h2>
            <p>Scroll Y Position: {scrollY}px</p>
        </div>
    );
}

export default Performance;
