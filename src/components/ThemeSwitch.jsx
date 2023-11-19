import { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import {
  iconMoonLight,
  iconMoonDark,
  iconSunDark,
  iconSunLight,
} from '../assets/images';

const ThemeSwitch = () => {
  const { state, dispatch } = useContext(QuizContext);

  const iconSun = state.isDarkMode ? iconSunDark : iconSunLight;
  const iconMoon = state.isDarkMode ? iconMoonDark : iconMoonLight;

  const changeTheme = () => {
    const currentMode = state.isDarkMode;
    dispatch({ type: 'SWITCH_THEME', payload: !currentMode });
  };

  return (
    <div className='d-flex align-center gap-16'>
      <img src={iconSun} alt='' />
      <label className='switch'>
        <input type='checkbox' onClick={changeTheme} />
        <span className='slider round'></span>
      </label>
      <img src={iconMoon} alt='' />
    </div>
  );
};

export default ThemeSwitch;
