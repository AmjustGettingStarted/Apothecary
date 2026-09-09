'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { X } from 'lucide-react';

export const RadialCarousel = ({
  items = [],
  radius = 190,
  thumbnailSize = 92,
  centerSize = 320,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPanning, setIsPanning] = useState(false);

  const [responsiveSizes, setResponsiveSizes] = useState({
    radius,
    thumbnailSize,
    centerSize,
    logoSize: 110,
  });

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;

      if (width < 400) {
        setResponsiveSizes({
          radius: 100,
          thumbnailSize: 48,
          centerSize: 210,
          logoSize: 60,
        });
      } else if (width < 640) {
        setResponsiveSizes({
          radius: 120,
          thumbnailSize: 58,
          centerSize: 240,
          logoSize: 70,
        });
      } else if (width < 1024) {
        setResponsiveSizes({
          radius: 145,
          thumbnailSize: 70,
          centerSize: 260,
          logoSize: 80,
        });
      } else if (width < 1280) {
        setResponsiveSizes({
          radius: 150,
          thumbnailSize: 72,
          centerSize: 270,
          logoSize: 85,
        });
      } else if (width < 1536) {
        setResponsiveSizes({
          radius: 170,
          thumbnailSize: 80,
          centerSize: 295,
          logoSize: 95,
        });
      } else {
        setResponsiveSizes({
          radius,
          thumbnailSize,
          centerSize,
          logoSize: 110,
        });
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [radius, thumbnailSize, centerSize]);

  const rotation = useMotionValue(0);

  const smoothRotation = useSpring(rotation, {
    bounce: 0.15,
    damping: 20,
    stiffness: 120,
  });

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(false);
  };

  const containerVariants = {
    collapsed: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
    expanded: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
  };

  const currentItem = items[activeIndex] || items[0];

  return (
    <div className="relative flex h-[380px] sm:h-[420px] md:h-[460px] lg:h-[460px] xl:h-[500px] 2xl:h-[520px] w-full items-center justify-center select-none overflow-visible touch-pan-y">
      <AnimatePresence mode="popLayout">
        {!isExpanded && currentItem ? (
          /* SINGLE CARD PREVIEW VIEW: High clarity card with info */
          <motion.div
            key="center-view"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
            className="relative z-20 flex items-center justify-center"
          >
            <motion.div
              layoutId={`card-${currentItem.id}`}
              style={{
                width: responsiveSizes.centerSize,
                height: responsiveSizes.centerSize,
              }}
              className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/20 bg-neutral-900/90 shadow-2xl shadow-emerald-950/50 backdrop-blur-2xl"
            >
              {/* Doctor Headshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                layoutId={`img-${currentItem.id}`}
                src={currentItem.url}
                alt={currentItem.title || 'Selected doctor'}
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* Bottom Gradient Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-5 text-left flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {currentItem.title}
                  </h3>
                  {currentItem.rating && (
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ★ {currentItem.rating}
                    </span>
                  )}
                </div>
                {currentItem.specialty && (
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                    {currentItem.specialty}
                  </p>
                )}
              </div>

              {/* Close Button to return to Radial View */}
              <button
                onClick={toggleExpand}
                aria-label="Back to carousel"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:bg-black active:scale-95 cursor-pointer z-30"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          /* RADIAL VIEW: Cards orbiting around the center logo, remaining UPRIGHT */
          <motion.div
            key="radial-view"
            variants={containerVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className={`relative flex h-full w-full cursor-grab items-center justify-center active:cursor-grabbing ${
              isPanning ? 'touch-none' : 'touch-pan-y'
            }`}
            onPanStart={() => setIsPanning(true)}
            onPanEnd={() => setIsPanning(false)}
            onPan={(_, info) => {
              rotation.set(rotation.get() + info.delta.x * 0.45);
            }}
          >
            {/* Center: ConsultX Brand Hub with soft glow */}
            <div className="relative z-10 pointer-events-none flex items-center justify-center">
              <div
                style={{
                  width: responsiveSizes.logoSize,
                  height: responsiveSizes.logoSize,
                }}
                className="relative flex items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[26px] bg-neutral-950/90 border border-emerald-500/30 p-3 sm:p-4 shadow-[0_0_35px_rgba(16,185,129,0.25)] backdrop-blur-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="ConsultX Logo"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Orbiting Upright Specialist Cards */}
            {items.map((item, index) => {
              const baseAngle =
                (index / items.length) * (2 * Math.PI) - Math.PI / 2;
              return (
                <Item
                  key={item.id || index}
                  item={item}
                  baseAngle={baseAngle}
                  radius={responsiveSizes.radius}
                  thumbnailSize={responsiveSizes.thumbnailSize}
                  rotation={smoothRotation}
                  onClick={() => handleItemClick(index)}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Item = ({
  item,
  baseAngle,
  radius,
  thumbnailSize,
  rotation,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Position along the orbit
  const x = useTransform(rotation, (r) => {
    const currentAngle = baseAngle + (r * Math.PI) / 180;
    return Math.cos(currentAngle) * radius;
  });

  const y = useTransform(rotation, (r) => {
    const currentAngle = baseAngle + (r * Math.PI) / 180;
    return Math.sin(currentAngle) * radius;
  });

  const itemVariants = {
    collapsed: {
      opacity: 0,
      scale: 0.8,
      transition: { type: 'spring', bounce: 0.4, duration: 0.4 },
    },
    expanded: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ x, y }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute cursor-pointer select-none group z-20"
      whileHover={{ scale: 1.15, zIndex: 40 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        layoutId={`card-${item.id}`}
        style={{ width: thumbnailSize, height: thumbnailSize }}
        className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] border-2 border-white/20 bg-neutral-900 shadow-xl transition-all duration-200 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]"
      >
        {/* Upright Headshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          layoutId={`img-${item.id}`}
          src={item.url}
          alt={item.title || 'Doctor item'}
          className="h-full w-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Online / Active Status Dot */}
        <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 border border-neutral-950 shadow-[0_0_8px_rgba(16,185,129,0.9)] pointer-events-none" />
      </motion.div>

      {/* Floating Upright Tooltip Label on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 bg-neutral-950/95 border border-emerald-500/40 rounded-lg shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap z-50 flex flex-col items-center"
          >
            <span className="text-[11px] font-semibold text-white">
              {item.title}
            </span>
            {item.specialty && (
              <span className="text-[9.5px] font-medium text-emerald-400">
                {item.specialty}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
