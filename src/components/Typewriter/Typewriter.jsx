import React, { useEffect, useState, useRef } from 'react';
import "./Typewriter.scss";

export const Typewriter = ({ toRotate, period }) => {
    const [text, setText] = useState('');
    const isDeleting = useRef(false);
    const loopNum = useRef(0);
    const textRef = useRef('');
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const tick = () => {
            const i = loopNum.current % toRotate.length;
            const fullTxt = toRotate[i];

            let updatedText = isDeleting.current
                ? fullTxt.substring(0, textRef.current.length - 1)
                : fullTxt.substring(0, textRef.current.length + 1);

            textRef.current = updatedText;
            setText(updatedText);

            let delta = isDeleting.current ? 70 : 100;

            if (!isDeleting.current && updatedText === fullTxt) {
                delta = period;
                isDeleting.current = true;
            } else if (isDeleting.current && updatedText === '') {
                isDeleting.current = false;
                loopNum.current += 1;
                delta = 500; 
            }

            typingTimeoutRef.current = setTimeout(() => {
                tick();
            }, delta);
        };

        tick();

        return () => clearTimeout(typingTimeoutRef.current);
    }, [toRotate, period]);

    return (
        <span className="typewrite">
            <span className="wrap">{text}</span>
        </span>
    );
};





