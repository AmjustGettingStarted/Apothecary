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
          radius: 105,
          thumbnailSize: 50,
          centerSize: 220,
          logoSize: 65,
        });
      } else if (width < 640) {
        setResponsiveSizes({
          radius: 125,
          thumbnailSize: 62,
          centerSize: 250,
          logoSize: 75,
        });
      } else if (width < 1024) {
        setResponsiveSizes({
          radius: 155,
          thumbnailSize: 76,
          centerSize: 280,
          logoSize: 90,
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
    <div className="relative flex h-[440px] sm:h-[480px] lg:h-[520px] w-full items-center justify-center select-none overflow-visible touch-pan-y">
      <AnimatePresence mode="popLayout">
        {!isExpanded && currentItem ? (
          /* SINGLE CARD VIEW: Only clicked card is visible in center */
          <motion.div
            key="center-view"
            layout
            transition={{ type: 'spring', bounce: 0.15, duration: 0.25 }}
            className="relative z-20 flex items-center justify-center"
          >
            <motion.div
              layoutId={`card-${currentItem.id}`}
              style={{
                width: responsiveSizes.centerSize,
                height: responsiveSizes.centerSize,
              }}
              className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                layoutId={`img-${currentItem.id}`}
                src={currentItem.url}
                alt={currentItem.title || 'Selected item'}
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* Close Button to return to Radial View */}
              <button
                onClick={toggleExpand}
                aria-label="Back to carousel"
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/75 text-white shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:bg-black/95 active:scale-95 cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          /* RADIAL VIEW: Cards orbiting around the center logo */
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
            {/* Center: ONLY THE LOGO */}
            <div className="relative z-10 pointer-events-none flex items-center justify-center">
              <div
                style={{
                  width: responsiveSizes.logoSize,
                  height: responsiveSizes.logoSize,
                }}
                className="flex items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[26px] bg-neutral-900/90 p-3 sm:p-4 shadow-xl backdrop-blur-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="ConsultX Logo"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.55)]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Orbiting Radial Cards */}
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
  const x = useTransform(rotation, (r) => {
    const currentAngle = baseAngle + (r * Math.PI) / 180;
    return Math.cos(currentAngle) * radius;
  });

  const y = useTransform(rotation, (r) => {
    const currentAngle = baseAngle + (r * Math.PI) / 180;
    return Math.sin(currentAngle) * radius;
  });

  const rotate = useTransform(rotation, (r) => {
    const currentAngle = baseAngle + (r * Math.PI) / 180;
    return (currentAngle * 180) / Math.PI + 90;
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
      style={{ x, y, rotate }}
      onClick={onClick}
      className="absolute cursor-pointer select-none"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        layoutId={`card-${item.id}`}
        style={{ width: thumbnailSize, height: thumbnailSize }}
        className="overflow-hidden rounded-[18px] sm:rounded-[22px] shadow-2xl transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          layoutId={`img-${item.id}`}
          src={item.url}
          alt={item.title || 'Doctor item'}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};
