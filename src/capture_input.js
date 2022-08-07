import React, { useEffect, useState } from "react";

const LENGTH = 5;

const CaptureInput = () => {
  const [newWord, setNewWord] = useState([]);

  useEffect(() => {
    document.addEventListener("keyup", onKeyUp);
    return () => document.removeEventListener("keyup", onKeyUp);
  }, []);

  const onKeyUp = (e) => {
    if (e.keyCode === 8) {
      if (newWord.length > 0) {
        newWord.splice(newWord.length - 1, 1);
      }
    } else if (e.keyCode === 13) {
      if (LENGTH === newWord.length) {
        alert(newWord.join(""));
      } else {
        alert("Error : Not all input filled");
      }
    } else {
      if (e.key.length === 1) {
        console.log(e.key);
        const only_alpha_pattern = /[0-9]/g; // Allowing only number to be captured
        let valid_char = only_alpha_pattern.test(e.key);
        if (valid_char) {
          if (newWord.length < LENGTH) newWord.push(e.key);
        }
      }
    }
    setNewWord((_) => [...newWord]);
  };

  return (
    <>
      <h2>Eg. Enter PIN</h2>
      <div className="pins">
        {newWord.map((char, ind) => {
          return (
            <div key={`char-entered-${ind}`} className={`box big`}>
              {char?.toUpperCase()}
            </div>
          );
        })}
        {LENGTH - newWord.length > 0
          ? [...Array(LENGTH - newWord.length)].map((_, ind) => {
              return (
                <div key={`char-entered-${ind}`} className={`box big`}>
                  {ind === 0 && <span className="blinking-cursor">|</span>}
                </div>
              );
            })
          : null}
      </div>
      <p> - Its auto focused. Just start typing. </p>
      <p> - Enter numbers 1-9. </p>
      <p> - Hit enter after filling all boxes.</p>
    </>
  );
};

export default CaptureInput;
