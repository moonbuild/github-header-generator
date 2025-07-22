import { useEffect, useRef, useState } from 'react';
import { ChromePicker, type ColorResult } from 'react-color';

const ColorPicker = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [openDisplay, setOpenDisplay] = useState(false);
  const [color, setColor] = useState('#541D1D');
  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenDisplay(false);
      }
    };
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDisplay(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => setOpenDisplay(true)}
        style={{
          display: 'inline-block',
          padding: 4,
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '20px',
            backgroundColor: color,
          }}
        >
          {openDisplay && (
            <div
              ref={ref}
              style={{ position: 'absolute', zIndex: 10, left: '30px', bottom: '40px' }}
            >
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <ChromePicker color={color} onChange={handleColorChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ColorPicker;
