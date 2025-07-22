import ColorPicker from '../../utils/ColorPicker';

import './settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-title">Editor</div>
      <div className="input-items">
        <div className="input-item">
          <div className="label">Main Text: </div>
          <input className="input" />
        </div>
        <div className="input-item">
          <div className="label">First Word: </div>
          <input className="input" />
        </div>
        <div className="input-item">
          <div className="label">Third Word: </div>
          <input className="input" />
        </div>
      </div>
      <div className="input-items">
        <div className="input-item">
          <div className="label">Primary Color: </div>
          <ColorPicker />
          <input className="input" />
        </div>
      </div>
    </div>
  );
};
export default Settings;
