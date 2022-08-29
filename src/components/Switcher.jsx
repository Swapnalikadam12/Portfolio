import React, { useState } from 'react'
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'>
        <div class="relative flex flex-col items-center group">
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </div>
    </>
  )
}

export default Switcher