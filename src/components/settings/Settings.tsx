import { useEditorStore } from '../../stores/editorStore';
import ColorPicker from '../../utils/ColorPicker';

import './settings.css';

const Settings = () => {
  const {
    mainText,
    highlightedText,
    setMainText,
    setHighlightedText,
    backgroundColor,
    textColor,
    setBackgroundColor,
    setTextColor,
  } = useEditorStore();
  return (
    <div className="settings">
      <div className="settings-title">Editor</div>
      <div className="input-items">
        <div className="input-item">
          <div className="label">Your Sentence: </div>
          <input
            className="input"
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            placeholder="Enter your sentence"
          />
        </div>
        <div className="input-item">
          <div className="label">Text you want to highlight: </div>
          <input
            className="input"
            value={highlightedText}
            onChange={(e) => setHighlightedText(e.target.value)}
            placeholder="Enter text"
          />
        </div>
      </div>
      <div className="input-items">
        <div className="input-item">
          <div className="label">Background Color: </div>
          <ColorPicker color={backgroundColor} handleColorChange={setBackgroundColor} />
          <input
            className="input"
            placeholder="Enter Background hex"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>

        <div className="input-item">
          <div className="label">Text Color: </div>
          <ColorPicker color={textColor} handleColorChange={setTextColor} />
          <input
            className="input"
            placeholder="Enter Text hex"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Settings;
