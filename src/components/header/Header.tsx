import { useEditorStore } from '../../stores/editorStore';

import './header.css';

const Header = () => {
  const { mainText, highlightedText, backgroundColor, textColor } = useEditorStore();
  const SecondaryLine = () => (
    <div className="background-text-wrapper">
      {mainText.split(' ').map((text) => (
        <span
          className="background-text"
          style={{ color: 'transparent', WebkitTextStroke: `1px ${textColor}` }}
        >
          {text}
        </span>
      ))}
    </div>
  );
  return (
    <div className="header">
      <div className="banner" style={{ backgroundColor: backgroundColor }}>
        <SecondaryLine />
        <div className="main-text-wrapper">
          {mainText.split(' ').map((text) => (
            <span
              className="main-text"
              style={{
                backgroundColor: `${text === highlightedText ? textColor : backgroundColor}`,
                color: `${text === highlightedText ? backgroundColor : textColor}`,
                padding: `${text === highlightedText ? '0px 2px' : ''}`,
              }}
            >
              {text}
            </span>
          ))}
        </div>
        <SecondaryLine />
      </div>
    </div>
  );
};
export default Header;
