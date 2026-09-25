import React, { useRef, useState, useEffect, type ReactNode, type UIEvent } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: () => void;
  onClick?: () => void;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.9, opacity: 0, x: -16 }}
      animate={inView ? { scale: 1, opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
};

export interface AnimatedListProps {
  items?: ReactNode[];
  onItemSelect?: (item: ReactNode, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
  staggerDelay?: number;
  accentColor?: string;
  /** Cicla uma cor por item (ex.: paleta rainbow pastel); tem prioridade sobre accentColor */
  accentColors?: string[];
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
  staggerDelay = 0.08,
  accentColor = 'var(--color-primary)',
  accentColors
}) => {
  const colorFor = (index: number) =>
    accentColors && accentColors.length > 0 ? accentColors[index % accentColors.length] : accentColor;

  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => {
          const next = e.key === 'ArrowDown'
            ? Math.min(prev + 1, items.length - 1)
            : Math.max(prev - 1, 0);
          return next;
        });
      } else if (e.key === 'Enter' && selectedIndex >= 0 && onItemSelect) {
        e.preventDefault();
        onItemSelect(items[selectedIndex], selectedIndex);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const el = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (el) el.scrollIntoView({ block: 'nearest' });
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="max-h-[420px] overflow-y-auto pr-2"
        style={!displayScrollbar ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : undefined}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            index={index}
            delay={index * staggerDelay}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => onItemSelect && onItemSelect(item, index)}
          >
            <div
              className={`flex items-start gap-3 rounded-2xl p-4 mb-3 border transition-colors duration-200 ${itemClassName}`}
              style={{
                borderColor: selectedIndex === index ? colorFor(index) : 'rgba(255,255,255,0.08)',
                backgroundColor: '#0a0a0a'
              }}
            >
              <span className="text-neutral-200 text-base leading-relaxed">{item}</span>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 h-10 transition-opacity duration-300"
            style={{
              opacity: topGradientOpacity,
              background: 'linear-gradient(to bottom, #0a0a0a, transparent)'
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 transition-opacity duration-300"
            style={{
              opacity: bottomGradientOpacity,
              background: 'linear-gradient(to top, #0a0a0a, transparent)'
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedList;
