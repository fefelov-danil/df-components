import React from 'react';
import {DropDown} from "components/dropDown/DropDown";
import {Button} from "components/button/Button";

export function App() {

  return (
    <div>
      <Button>Пример кнопки </Button><br/><br/>
      <Button colorType={'warning'}>Пример кнопки</Button><br/><br/>
      <Button outlined={true}>Пример кнопки</Button><br/><br/>
      <Button loading={true}>Пример кнопки</Button><br/><br/>
      <Button text={true}>Пример кнопки</Button><br/><br/>
      <DropDown openPopupChildren={<Button colorType={'success'}>Кнопка DropDown</Button>}>
        <span>Пункт один<br/></span>
        <span>Пункт два<br/></span>
        <span>Пункт три</span>
      </DropDown>
    </div>
  );
}