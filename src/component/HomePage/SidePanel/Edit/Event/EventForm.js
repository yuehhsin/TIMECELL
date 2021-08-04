/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const EventForm = ({ inputValue, setInputValue, eventText, setEventText }) => {
  const handeleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      const selColor = document.querySelector('input[name="color"]:checked').value;
      const uploadEvent = [
        { content: inputValue, color: selColor, id: Math.random() },
        ...eventText,
      ];
      setEventText(uploadEvent);
      setInputValue('');
    }
    // if (inputValue !== '') {
    // const selColor = document.querySelector('input[name="color"]:checked').value;
    //   // event資料建立到資料庫;
    //   const uploadEvent = [
    //     { content: inputValue, color: selColor, id: Math.random() },
    //     ...eventText,
    //   ];
    //   memberData
    //     .doc('test@gmail.com')
    //     .set({ eventInfo: uploadEvent })
    //     .then(() => {
    //       setEventText(uploadEvent);
    //     })
    //     .catch((E) => {
    //       console.error('Error writing document: ', E);
    //     });
    //   setInputValue('');
    // }
  };
  return (
    <form className="eventForm" onSubmit={handleSubmit}>
      <div style={{ position: 'relative' }}>
        <input
          placeholder="Create New Event"
          className="eventInput"
          style={{ fontFamily: 'roboto, cursive' }}
          onChange={handeleInputValue}
          value={inputValue}
          maxLength="12"
        />
        <button type="submit" className="eventSubmitBTN" />
      </div>
      <div className="selColor">
        <input id="color1" type="radio" name="color" value="#DB4453" defaultChecked hidden />
        <label htmlFor="color1" className="color1" />
        <input id="color2" type="radio" name="color" value="#F2802D" hidden />
        <label htmlFor="color2" className="color2" />
        <input id="color3" type="radio" name="color" value="#36BC9B" hidden />
        <label htmlFor="color3" className="color3" />
        <input id="color4" type="radio" name="color" value="#5D9CEC" hidden />
        <label htmlFor="color4" className="color4" />
        <input id="color5" type="radio" name="color" value="#8C63E3" hidden />
        <label htmlFor="color5" className="color5" />
        <input id="color6" type="radio" name="color" value="#5C5C5C" hidden />
        <label htmlFor="color6" className="color6" />
        <input id="color7" type="radio" name="color" value="#EC87BF" hidden />
        <label htmlFor="color7" className="color7" />
        <input id="color8" type="radio" name="color" value="#F2C72D" hidden />
        <label htmlFor="color8" className="color8" />
        <input id="color9" type="radio" name="color" value="#A0D468" hidden />
        <label htmlFor="color9" className="color9" />
        <input id="color10" type="radio" name="color" value="#66D1F2" hidden />
        <label htmlFor="color10" className="color10" />
        <input id="color11" type="radio" name="color" value="#AC92ED" hidden />
        <label htmlFor="color11" className="color11" />
        <input id="color12" type="radio" name="color" value="#8B8B8B" hidden />
        <label htmlFor="color12" className="color12" />
      </div>
    </form>
  );
};

export default EventForm;
