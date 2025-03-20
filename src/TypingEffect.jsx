import React, { useState, useEffect } from 'react';

const Typingeffect = ({ texts, speed }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(texts[currentTextIndex].substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === texts[currentTextIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 1000); // Delay before switching to the next text
      }
    }, speed);

    return () => clearInterval(interval);
  }, [texts, currentTextIndex, speed]);

  return (
    <div>
        <p className=' text-orange-600 md:mt-3 font-bold text-[1rem] md:text-[2rem] underline-offset-1 md:underline-offset-[1rem] underline' style={{fontFamily:"'manrope',sans-serif"}}>

      {displayText}
        </p>
   
    </div>
  );
};
export default Typingeffect