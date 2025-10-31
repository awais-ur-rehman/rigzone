import { useEffect, useRef, useState } from 'react';

type ProductOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  summary: string;
  sizes?: string;
  schedules?: string;
  standards?: string;
  materialGrade?: string;
  specialItems?: string;
  extraNotes?: string;
};

export function ProductOverlay({ isOpen, onClose, title, imageUrl, summary, sizes, schedules, standards, materialGrade, specialItems, extraNotes }: ProductOverlayProps) {
  const [visible, setVisible] = useState(isOpen);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const prevBodyOverflow = useRef<string | null>(null);
  const prevHtmlOverflow = useRef<string | null>(null);

  const restoreScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = prevBodyOverflow.current || '';
      document.documentElement.style.overflow = prevHtmlOverflow.current || '';
    }
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      if (typeof document !== 'undefined') {
        prevBodyOverflow.current = document.body.style.overflow;
        prevHtmlOverflow.current = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }
    } else {
      restoreScroll();
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      // Ensure scroll is restored if component unmounts while overlay open
      restoreScroll();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? 'backdrop-blur-sm bg-black/20' : 'backdrop-blur-0 bg-transparent'} transition-all duration-200`} onClick={onClose}>
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto bg-[#E5E8EB] border border-[#E5E7EB] shadow-xl transition-transform duration-200 ${isOpen ? 'scale-100' : 'scale-95'}`}
      >
        {/* Image on top */}
        <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden bg-[#E9EDF0]">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content below in a single column */}
        <div className="p-6 md:p-8 space-y-5">
          <div className="flex items-start justify-between">
            <h3 className="text-[24px] font-motor-oil text-[#3E4C52] leading-tight pr-6">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="text-[#3E4C52] hover:text-[#E15E00] transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="text-[16px] font-inter text-[#3E4C52]">{summary}</p>

          {sizes && (
            <p className="text-[16px] font-inter text-[#3E4C52]"><span className="font-bold">Sizes:</span> {sizes}</p>
          )}
          {schedules && (
            <p className="text-[16px] font-inter text-[#3E4C52]"><span className="font-bold">Schedules:</span> {schedules}</p>
          )}
          {standards && (
            <p className="text-[16px] font-inter text-[#3E4C52]"><span className="font-bold">Standards:</span> {standards}</p>
          )}
          {materialGrade && (
            <p className="text-[16px] font-inter text-[#3E4C52]"><span className="font-bold">Material Grade:</span> {materialGrade}</p>
          )}
          {specialItems && (
            <p className="text-[16px] font-inter text-[#3E4C52]"><span className="font-bold">Special Items:</span> {specialItems}</p>
          )}
          {extraNotes && (
            <p className="text-[16px] font-inter text-[#3E4C52]">{extraNotes}</p>
          )}
        </div>
      </div>
    </div>
  );
}


