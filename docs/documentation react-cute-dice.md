## React-cute-dice

React cute dice is a library that gives you three ways to implement a dice. You can use a fully functional dice with a cute design; use our cute dice and control it with your own logic, or use our useCuteDice hook and create your dice with a custom look and feel without worrying about the functionality.

## Installation

### Using NPM

```shell
npm i --save react-cute-dice
```

### Or with yarn 

```powershell
yarn add react-cute-dice
```

## Usage

### Fully functional cute dice

The way to use the full functionality is using the available props where you can receive: 
- **onChange**: A function  that returns the value of the dice and if is rolling 

- **disable** : (optional) Sets the dice as disabled which means it won't roll if you click it.

- **colors**:  (optional) An object with the six colors that the dice need, this is optional and you can use de default colors. 

- **className**: (optional) Is a class that you can add to your dice in order to identify it.

  

  Demo: https://gdlm91.github.io/react-cute-dice/?path=/story/cutedice--default

```react
import React, { useState } from 'react';
import CuteDice, { DiceValues } from 'react-cute-dice'

export const Default: React.FC = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const handleOnChange = (value: DiceValues, rolling: boolean) => {
    setValue(value);
    setRolling(rolling);
  };

  return (
    <>
      <div>Rolling: {`${rolling}`}</div>
      <div>Value: {value}</div>

      <CuteDice onChange={handleOnChange} />
    </>
  );
};
```

## Controlled dice 

With this dice, you have the style of the dice, but you control its value. The props available for this are:

- **onclick**: Is a function that is executed when the dice is clicked 

- **value**: the value of the dice.
- **isRolling**: (optional) will make the dice a random number until is false. 
- **disable** : (optional) Sets the dice as disabled which means it won't roll if you click it.
- **colors**:  (optional) An object with the six colors that the dice need, this is optional and you can use de default colors. 
- **className**: (optional) Is a class that you can add to your dice in order to identify it.

```react
import React, { useState } from 'react';
import { ControlledCuteDice, generateRandomInt, DiceValues } from 'react-cute-dice'

export const Controlled: React.FC = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const handleOnClick = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      setValue(generateRandomInt(1, 6) as DiceValues);
    }, 3000);
  };

  return (
    <>
      <div>Rolling: {`${rolling}`}</div>
      <div>Value: {value}</div>

      <ControlledCuteDice value={value} onClick={handleOnClick} isRolling={rolling} />
    </>
  );
};
```

## useDice (Hook)

Whit this hook you will have the logic of the dice and will return you (the value to show if is rolling and a function to calculate the next value) then you can use all these values to create a dice with your own design. 

```react
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { useCuteDice } from '../index';

export default {
  title: 'useDice',
  //   component: useDice,
} as Meta;

export const Hook: Story = () => {
  const { value, isRolling, throwDice } = useCuteDice();
  return (
    <>
      <div>Rolling: {`${isRolling}`}</div>
      <div>Value: {value}</div>
      <button onClick={throwDice} disabled={isRolling}>
        {value}
      </button>
    </>
  );
};
```

