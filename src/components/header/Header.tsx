import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

import { useEditorStore } from '../../stores/editorStore';

import './header.css';

const Header = () => {
  const { mainText, highlightedText, backgroundColor, textColor } = useEditorStore();

  const headerRef = useRef<HTMLDivElement>(null);
  const [showCopyIcon, setShowCopyIcon] = useState(true);

  const copyImage = async () => {
    if (!headerRef.current) return;
    const canvas = await html2canvas(headerRef.current);
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      try {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        setShowCopyIcon(false);
        setTimeout(() => {
          setShowCopyIcon(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    });
  };

  const downloadImage = async () => {
    if (!headerRef.current) return;
    const canvas = await html2canvas(headerRef.current);
    const link = document.createElement('a');
    link.download = 'github-header.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const SecondaryLine = () => (
    <div className="background-text-wrapper">
      {mainText
        .replace('/d', '•')
        .split(' ')
        .map((text) => (
          <span
            key={text}
            className="background-text"
            style={{ color: 'transparent', WebkitTextStroke: `1px ${textColor}` }}
          >
            {text}
          </span>
        ))}
    </div>
  );

  const MainLine = () => {
    return (
      <div className="main-text-wrapper">
        {mainText
          .trim()
          .replace('/d', '•')
          .split(' ')
          .map((text) => {
            const matchFound = text === highlightedText.trim().replace('/d', '•');
            return (
              <span
                className="main-text"
                style={{
                  backgroundColor: `${matchFound ? textColor : backgroundColor}`,
                  color: `${matchFound ? backgroundColor : textColor}`,
                  padding: `${matchFound ? '0px 2px' : ''}`,
                }}
              >
                {text}
              </span>
            );
          })}
      </div>
    );
  };

  return (
    <div className="header-btns-wrapper">
      <div className="header">
        <div ref={headerRef} className="banner" style={{ backgroundColor: backgroundColor }}>
          <SecondaryLine />
          <MainLine />
          <SecondaryLine />
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={copyImage} className="copy-btn">
          <>
            {showCopyIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 15 2 2 4-4" />
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </>
          Copy
        </button>
        <button onClick={downloadImage} className="download-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
            <path d="M7 3v4a1 1 0 0 0 1 1h7" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};
export default Header;
