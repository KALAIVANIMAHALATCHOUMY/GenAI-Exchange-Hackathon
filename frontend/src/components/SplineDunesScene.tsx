import React, { useEffect, useRef } from 'react';

// Declare spline-viewer as a custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

// Spline viewer component
const SplineDunesScene = ({ className = "" }: { className?: string }) => {
  const splineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (splineRef.current) {
      splineRef.current.setAttribute('url', 'https://prod.spline.design/2qhjfJJFqo8unsDo/scene.splinecode');
    }
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full z-0 ${className}`}>
      <spline-viewer 
        ref={splineRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
};

export default SplineDunesScene;