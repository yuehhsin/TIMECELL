import styled from 'styled-components';
import React from 'react';
import submitIcon from '../../../../../icon/submit.png';
import submitSelIcon from '../../../../../icon/submit_sel.png';

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
    <Eventform onSubmit={handleSubmit}>
      <div style={{ position: 'relative' }}>
        <EventInput
          placeholder="Create New Event"
          style={{ fontFamily: 'roboto, cursive' }}
          onChange={handeleInputValue}
          value={inputValue}
          maxLength="12"
        />
        <SubmitBtn type="submit" />
      </div>
      <ColorScope>
        <input id="color1" type="radio" name="color" value="#DB4453" defaultChecked hidden />
        <Color1 htmlFor="color1" />
        <input id="color2" type="radio" name="color" value="#F2802D" hidden />
        <Color2 htmlFor="color2" />
        <input id="color3" type="radio" name="color" value="#36BC9B" hidden />
        <Color3 htmlFor="color3" />
        <input id="color4" type="radio" name="color" value="#5D9CEC" hidden />
        <Color4 htmlFor="color4" />
        <input id="color5" type="radio" name="color" value="#8C63E3" hidden />
        <Color5 htmlFor="color5" />
        <input id="color6" type="radio" name="color" value="#5C5C5C" hidden />
        <Color6 htmlFor="color6" />
        <input id="color7" type="radio" name="color" value="#EC87BF" hidden />
        <Color7 htmlFor="color7" />
        <input id="color8" type="radio" name="color" value="#F2C72D" hidden />
        <Color8 htmlFor="color8" />
        <input id="color9" type="radio" name="color" value="#A0D468" hidden />
        <Color9 htmlFor="color9" />
        <input id="color10" type="radio" name="color" value="#66D1F2" hidden />
        <Color10 htmlFor="color10" />
        <input id="color11" type="radio" name="color" value="#AC92ED" hidden />
        <Color11 htmlFor="color11" />
        <input id="color12" type="radio" name="color" value="#8B8B8B" hidden />
        <Color12 htmlFor="color12" />
      </ColorScope>
    </Eventform>
  );
};

export default EventForm;

// STYLE
const Eventform = styled.form`
  padding: 0px 20px 0px 20px;
  margin-top: 20px;
`;
const SubmitBtn = styled.button`
  background-image: url(${submitIcon});
  width: 20px;
  height: 20px;
  background-size: cover;
  position: absolute;
  top: 10px;
  right: 18px;
  &:hover {
    background-image: url(${submitSelIcon});
  }
`;
const EventInput = styled.input`
  height: 20px;
  width: 160px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  color: #8a8a8a;
  caret-color: #36bc9b;
  &:focus {
    outline-color: #383838;
  }
`;
const ColorScope = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px 5px 10px;
  justify-content: center;
  align-items: center;
`;
const Color1 = styled.label`
  &:before {
    background-color: #db4453;
  }
`;
const Color2 = styled.label`
  &:before {
    background-color: #f2802d;
  }
`;
const Color3 = styled.label`
  &:before {
    background-color: #36bc9b;
  }
`;
const Color4 = styled.label`
  &:before {
    background-color: #5d9cec;
  }
`;
const Color5 = styled.label`
  &:before {
    background-color: #8c63e3;
  }
`;
const Color6 = styled.label`
  &:before {
    background-color: #5c5c5c;
  }
`;
const Color7 = styled.label`
  &:before {
    background-color: #ec87bf;
  }
`;
const Color8 = styled.label`
  &:before {
    background-color: #f2c72d;
  }
`;
const Color9 = styled.label`
  &:before {
    background-color: #a0d468;
}
  }
`;
const Color10 = styled.label`
  &:before {
    background-color: #66d1f2;
  }
`;
const Color11 = styled.label`
  &:before {
    background-color: #ac92ed;
  }
`;
const Color12 = styled.label`
  &:before {
    background-color: #8b8b8b;
  }
`;
