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
      <div className='px-4 cursor-pointer capitalize py-6 text-4xl'>
        <div class="relative flex flex-col items-center group">
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
          />
          <div class="absolute top-5 flex flex-col items-center hidden mt-6 group-hover:flex">
            <span class="relative z-100 p-2 w-40 text-center text-xs leading-none text-white whitespace bg-black shadow-lg dark:bg-white dark:text-black">Switch to {colorTheme} Mode</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Switcher