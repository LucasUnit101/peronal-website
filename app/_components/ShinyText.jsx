const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  
  const shineKeyframes = `
    @keyframes shineEffect {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shineKeyframes }} />
      <div
        className={`inline-block ${className}`}
        style={{
          background: disabled 
            ? '#b5b5b5' 
            : 'linear-gradient(120deg, #9ca3af 20%, #ffffff 50%, #9ca3af 80%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '200% 0',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          animation: disabled ? 'none' : `shineEffect ${animationDuration} linear infinite`,
        }}
      >
        {text}
      </div>
    </>
  );
};

export default ShinyText;