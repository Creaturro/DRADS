import React, { useState, useEffect } from "react";

export default function InfographicCardInteractive({ title, description, bgColor = 'default', children }) {
  const [expanded, setExpanded] = useState(bgColor === 'blue');
  const [isManualOverride, setIsManualOverride] = useState(false);
  
  // Responsive breakpoint logic
  useEffect(() => {
    const handleResize = () => {
      if (isManualOverride) return; // Don't auto-adjust if user manually toggled
      
      const width = window.innerWidth;
      let shouldExpand = bgColor === 'blue'; // Default for cyan cards
      
      // Responsive breakpoints
      if (width < 768) { // Mobile
        shouldExpand = false; // All cards collapsed on mobile
      } else if (width < 1024) { // Tablet
        shouldExpand = bgColor === 'blue'; // Cyan cards expanded, magenta collapsed
      } else if (width < 1280) { // Small desktop
        shouldExpand = true; // All cards expanded
      } else { // Large desktop
        shouldExpand = true; // All cards expanded
      }
      
      setExpanded(shouldExpand);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [bgColor, isManualOverride]);
  
  const handleToggle = () => {
    setIsManualOverride(true); // Mark as manually overridden
    setExpanded(e => !e);
  };
  
  const textBg = bgColor === 'blue' ? '#26323A' : '#302A38';
  // Extract up to the first period, or the whole string if no period
  let firstSentence = description;
  const periodIdx = description.indexOf('.')
  if (periodIdx !== -1) {
    firstSentence = description.slice(0, periodIdx + 1).trim();
  }

  return (
    <div className="relative size-full min-h-[360px] md:min-h-[261px] pb-4" data-name="infographic_card">
      <div className="bg-red-500 xl1400:bg-green-500 text-white text-center p-2 mb-4">Breakpoint Test: Should be green above 1400px, red below</div>
      {/* Mobile/Vertical Layout: visible below 1400px */}
      <div className="flex flex-col justify-end items-start h-full w-full p-0 xl1400:hidden" data-name="content-mobile">
        {/* Icon/Image slot - on top in mobile layout */}
        <div className="flex justify-center w-full pt-2">
          <div 
            className="relative h-[150px] w-[200px] xl1400:h-[289px] xl1400:w-[368px] rounded-lg flex items-center justify-center transition-all duration-500" 
            style={{ 
              marginTop: 24,
              transform: 'translateY(0)'
            }}
          >
            {children}
          </div>
        </div>
        {/* Text - at bottom, left-aligned */}
        <div className="w-full flex justify-start pb-0 mt-0">
          <div className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 items-start justify-end leading-[0] not-italic p-[16px] rounded-lg shrink-0 text-[#ffffff] text-left h-auto w-[calc(100%-32px)] infographic-text-bg" data-name="text" style={{ backgroundColor: textBg }}>
            <div className="text-[20px] w-full text-left">
              <p className="block leading-[normal]">{title}</p>
            </div>
            <div className={`text-[14px] w-full h-auto text-left overflow-hidden transition-all duration-500 ${expanded ? '' : 'collapsed-desc'}`} style={{ maxHeight: expanded ? '200px' : '1.5em' }}>
              <p className={`block leading-[22px] ${expanded ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'}`}>
                {expanded ? description : (firstSentence + ' ...')}
              </p>
            </div>
            <button 
              className="-mt-2 focus:outline-none relative z-10 text-white hover:text-gray-300 transition-colors duration-200 self-start" 
              aria-expanded={expanded} 
              aria-label={expanded ? 'Collapse details' : 'Expand details'} 
              onClick={handleToggle} 
              tabIndex={0} 
              type="button"
            >
              <svg className={`transition-transform duration-300 w-5 h-5 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop/Horizontal Layout: visible at 1400px and above */}
      <div className="hidden xl1400:flex xl1400:flex-row xl1400:items-center xl1400:gap-0 xl1400:absolute xl1400:left-[26px] xl1400:top-1/2 xl1400:-translate-y-1/2 xl1400:z-20" data-name="content-desktop">
        {/* Text - first on desktop */}
        <div className="w-[270px] flex-shrink-0">
          <div className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 items-start justify-start leading-[0] not-italic p-[16px] rounded-lg shrink-0 text-[#ffffff] text-left h-auto w-[calc(100%-32px)] md:w-[291px] infographic-text-bg" data-name="text" style={{ backgroundColor: textBg }}>
            <div className="shrink-0 text-[20px] w-full">
              <p className="block leading-[normal]">{title}</p>
            </div>
            <div className={`shrink-0 text-[14px] w-full h-auto text-left overflow-hidden transition-all duration-500 ${expanded ? '' : 'collapsed-desc'}`} style={{ maxHeight: expanded ? '200px' : '1.5em' }}>
              <p className={`block leading-[22px] ${expanded ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'}`}>
                {expanded ? description : (firstSentence + ' ...')}
              </p>
            </div>
            <button 
              className="-mt-2 focus:outline-none relative z-10 text-white hover:text-gray-300 transition-colors duration-200 self-start" 
              aria-expanded={expanded} 
              aria-label={expanded ? 'Collapse details' : 'Expand details'} 
              onClick={handleToggle} 
              tabIndex={0} 
              type="button"
            >
              <svg className={`transition-transform duration-300 w-5 h-5 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
        {/* Icon/Image slot - second on desktop */}
        <div className="flex-shrink-0 xl1400:-ml-[50px]">
          <div 
            className="relative h-[289px] w-[368px] overflow-visible md:h-[289px] md:w-[368px] md:overflow-clip rounded-lg flex items-center justify-center transition-all duration-500" 
            data-name="icon-img"
            style={{ 
              transform: expanded ? 'translateX(0)' : 'translateX(-40px)'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 