import { useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { useMainDispatch } from '../../store/MainContextStore';

import * as S from './ChangeThemeButtons.styles';

const ChangeThemeButtons = () => {
  const [value, setValue] = useState('');
  const dispatch = useMainDispatch();

  const changeTheme = (value) => {
    dispatch({
      type: 'saveTheme',
      value: {
        name: value,
      },
    });

    setValue(value);
  };

  return (
    <S.ToggleGroup
      type="single"
      value={value}
      onValueChange={changeTheme}
      aria-label="Choose your favorite theme"
    >
      <S.ToggleGroupItem value="lightTheme" aria-label="Lighted theme">
        <SunIcon />
      </S.ToggleGroupItem>

      <S.ToggleGroupItem value="darkTheme" aria-label="Darked theme">
        <MoonIcon />
      </S.ToggleGroupItem>
    </S.ToggleGroup>
  );
};

export default ChangeThemeButtons;
