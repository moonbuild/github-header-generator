import './floatingShapes.css';

const FloatingShapes = () => {
  const shapes = [
    {
      type: 'triangle',
      size: 70,
      gradientColors: ['#ff6b6b', '#ff8e53'],
      dropShadow: 'rgba(255, 107, 107, 0.3)',
      top: '20%',
      left: '10%',
      animationDelay: '0s',
      rotateDuration: '15s',
    },
    {
      type: 'square',
      size: 70,
      gradientColors: ['#34e89e', '#0fb8ad'],
      dropShadow: 'rgba(52, 232, 158, 0.3)',
      top: '10%',
      right: '10%',
      animationDelay: '-10s',
      rotateDuration: '12s',
    },
    {
      type: 'circle',
      size: 80,
      gradientColors: ['#f59e0b', '#f97316'],
      dropShadow: 'rgba(245, 158, 11, 0.3)',
      top: '40%',
      right: '50%',
      animationDelay: '-10s',
      rotateDuration: '12s',
    },
    {
      type: 'square',
      size: 80,
      color: '#fff',
      gradientColors: ['#a855f7', '#7e22ce'],
      dropShadow: 'rgba(168, 85, 247, 0.3)',
      bottom: '5%',
      left: '10%',
      animationDelay: '-15s',
      rotateDuration: '40s',
    },
    {
      type: 'circle',
      size: 90,
      gradientColors: ['#ff4d4d', '#e63946'],
      dropShadow: 'rgba(255, 77, 77, 0.3)',
      color: '#fff',
      bottom: '10%',
      right: '20%',
      animationDelay: '-3s',
      rotateDuration: '0s',
    },
  ];
  const renderShape = (shape: any, idx: number) => {
    const { type, size, dropShadow, gradientColors, animationDelay, rotateDuration } = shape;
    let shapeElement;
    if (type === 'triangle') {
      shapeElement = (
        <svg
          width={size}
          height={size}
          viewBox={`0 0 24 24`}
          fill={`url(#triangleGradient${idx})`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`triangleGradient${idx}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <path
            d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }
    if (type === 'circle') {
      shapeElement = (
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`circleGradient${idx}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>

          <circle cx={size / 2} cy={size / 2} r={size * 0.4} fill={`url(#circleGradient${idx})`} />
        </svg>
      );
    }
    if (type === 'square') {
      const squareSize = size * 0.7;
      const offset = (size - squareSize) / 2;

      shapeElement = (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id={`squareGradient${idx}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <rect
            x={offset}
            y={offset}
            width={squareSize}
            height={squareSize}
            fill={`url(#squareGradient${idx})`}
            rx="8"
            ry="8"
          />
        </svg>
      );
    }

    const positionStyle: Record<string, string> = {};

    Object.keys(shape).forEach((direction) => {
      if (['top', 'right', 'bottom', 'left'].includes(direction)) {
        positionStyle[direction] = shape[direction];
      }
    });

    return (
      <div
        key={idx}
        className={`shape float-${idx + 1}`}
        style={{
          ...positionStyle,
          filter: `drop-shadow(0 0 20px ${dropShadow})`,
          animationDelay: animationDelay,
        }}
      >
        <div
          className="shape-rotate"
          style={{
            animationDelay: animationDelay,
            animationDuration: rotateDuration,
          }}
        >
          {shapeElement}
        </div>
      </div>
    );
  };

  return <>{shapes.map((shape, idx) => renderShape(shape, idx))}</>;
};
export default FloatingShapes;
