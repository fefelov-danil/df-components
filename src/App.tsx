import React from 'react';
import {DropDown} from "components/dropDown/DropDown";
import {Button} from "components/button/Button";

export function App() {

  return (
    <div>
      <DropDown openPopupChildren={<Button>11111</Button>}>
        <p>Пункт один</p>
        <p>Пункт два</p>
        <p>Пункт три</p>
      </DropDown>
    </div>
  );
}