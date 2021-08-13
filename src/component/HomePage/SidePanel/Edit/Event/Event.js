import React, { useState } from 'react';
import styled from 'styled-components';
import menuIcon from '../../../../../icon/menu_white.png';
import doneIcon from '../../../../../icon/done.png';

const Event = ({
  event,
  setSelEvent,
  eventText,
  item,
  setCaution,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
  setReRender,
}) => {
  // HOOK
  const [menu, setMenu] = useState(false); // menu視窗
  const [edit, handleEdit] = useState(false); // edit視窗
  const [eventEdit, handleMenuEdit] = useState(''); // edit(input onchang)

  const handleRenderTB = () => {
    setSelEvent({ color: event.color, event: event.content, id: event.id });
  };
  const handledrag = (e) => {
    setTimeout(() => {
      e.target.style.display = 'none';
    });
  };
  const handleDragEnd = (e) => {
    setTimeout(() => {
      e.target.style.display = 'flex';
      e.target = null;
    });
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleEditPanel = () => {
    handleEdit(true);
    handleMenuEdit(event.content);
  };
  const handleDelPanel = () => {
    setCaution(true);
  };
  const handleEventEdit = (e) => {
    handleMenuEdit(e.target.value);
  };
  const updateTB = (TB, orginalEvent) => {
    for (let i = 0; i < TB.length; i += 1) {
      if (TB[i].event === orginalEvent) {
        TB[i].event = eventEdit;
      }
    }
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (eventEdit !== '') {
      const orginalEvent = JSON.parse(JSON.stringify(eventText))[item].content;
      eventText[item].content = eventEdit;
      handleMenuEdit('');
      handleEdit(false);
      updateTB(MONTB, orginalEvent);
      updateTB(TUETB, orginalEvent);
      updateTB(WEDTB, orginalEvent);
      updateTB(THUTB, orginalEvent);
      updateTB(FRITB, orginalEvent);
      updateTB(SATTB, orginalEvent);
      updateTB(SUNTB, orginalEvent);
      setReRender(reRender + 1);
    }
  };
  return (
    <EventScope>
      <EventBtn
        onClick={handleRenderTB}
        onDragStart={handledrag}
        onDragEnd={handleDragEnd}
        draggable="true"
        bgColorSty={event.color}
        editSty={edit}
      >
        <h5>{event.content}</h5>
        <MenuBtn onClick={handleMenu} aria-label="menu-window" />
      </EventBtn>
      <form hidden={!edit} onSubmit={handleEditSubmit}>
        <EventInput
          type="text"
          onChange={handleEventEdit}
          value={eventEdit}
          maxLength="12"
          bgColorSty={event.color}
        />
        <DoneBtn type="submit" />
      </form>
      <CancleScope type="button" hideSty={menu} onClick={handleCloseMenu}>
        <MenuPop>
          <button
            type="button"
            style={{ borderBottom: '1px solid black' }}
            onClick={handleEditPanel}
          >
            EDIT
          </button>
          <button type="button" onClick={handleDelPanel}>
            DELETE
          </button>
        </MenuPop>
      </CancleScope>
    </EventScope>
  );
};

export default Event;

const MenuPop = styled.div`
  position: absolute;
  right: -10px;
  top: 10px;
  background-color: #fff;
  color: black;
  border-radius: 2px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  & button {
    padding: 5px 8px 5px 8px;
    &:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`;
const EventBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px 12px 18px;
  background-color: ${(props) => props.bgColorSty};
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const MenuBtn = styled.button`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image: url(${menuIcon});
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 2px;
  }
`;

const EventInput = styled.input`
  width: 200px;
  height: 44px;
  position: absolute;
  z-index: 10;
  top: 0;
  border-radius: 5px;
  background-color: ${(props) => props.bgColorSty};
  color: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  text-indent: 20px;
  &:focus {
    outline: none;
  }
`;
const EventScope = styled.div`
  position: relative;
`;
const DoneBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 12px;
  right: 20px;
  z-index: 20;
  background-image: url(${doneIcon});
  background-size: cover;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 5px;
  }
`;
const CancleScope = styled.button`
  display: ${(props) => (props.hideSty ? 'block' : 'none')};
  width: 220px;
  height: 52px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  cursor: pointer;
`;
