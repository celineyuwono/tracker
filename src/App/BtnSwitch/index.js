import React from 'react';
import cls from './btnswitch.module.scss';

export const BtnSwitchTheme = () => {
  const [isDark, setDark] = React.useState(false);
  return (
    <>
      {isDark && (
        <style>{`body {
      --bg-main: #252529;
      --bg-base: #2c2c31;
      --border-color-base: #34343a;
      --border-color-main: #44444e;
      --text-base: #ccc;
      --text-main: #ddd;
      }`}</style>
      )}
      <button
        onClick={() => setDark(!isDark)}
        type="button"
        className={cls.SWITCH}
      >
        Theme
      </button>
    </>
  );
};

export default BtnSwitchTheme;
