import type { MouseEvent } from 'react';

type ProductInfoCardProps = {
  title: string;
  imageUrl: string;
  summary: string;
  sizes?: string;
  standards?: string;
  schedules?: string;
  materialGrade?: string;
  specialItems?: string;
  extraNotes?: string;
  isExpanded?: boolean;
  onToggle?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function ProductInfoCard({ title, imageUrl, summary, sizes, standards, schedules, materialGrade, specialItems, extraNotes, isExpanded, onToggle }: ProductInfoCardProps) {
  const firstStandard = (standards || '').split(/[–,|/]/)[0]?.trim();
  return (
    <div className="bg-[#E5E8EB] shadow-[0_4px_4px_rgba(0,0,0,0.1)] h-full flex flex-col overflow-hidden transition-all duration-500 ease-out">
      <div className={`min-h-[200px] max-h-[200px] w-full overflow-hidden bg-[#E9EDF0]`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Title min height to align rows even when it wraps */}
        <h3 className="text-[24px] font-motor-oil font-regular text-[#3E4C52] leading-tight min-h-[60px] mt-4">{title}</h3>
        {/* Summary min height to keep next row aligned */}
        <p className="text-[18px] font-inter text-[#3E4C52] leading-snug min-h-[60px]">{summary}</p>
        {/* Sizes | Standards row with fixed min height */}
        <div className='flex w-full text-[18px] space-x-4 justify-start items-start min-h-[32px]'>
          {sizes && (
            <p className=" font-inter text-[#3E4C52] leading-snug">
              <span className="font-bold">Sizes:</span> {sizes}
            </p>
          )}

          {sizes && firstStandard && (
            <div className='bg-[#3E4C52] w-[1.2px] h-6'></div>
          )}
          {firstStandard && (
            <p className=" font-inter text-[#3E4C52] leading-snug">
              <span className="font-bold">Standards:</span> {firstStandard}
            </p>
          )}
        </div>
        <div className={`${isExpanded ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'} overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out space-y-3 text-[16px] font-inter text-[#3E4C52]`}>
          {schedules && (
            <p><span className="font-bold">Schedules:</span> {schedules}</p>
          )}
          {standards && (
            <p><span className="font-bold">Standards:</span> {standards}</p>
          )}
          {materialGrade && (
            <p><span className="font-bold">Material Grade:</span> {materialGrade}</p>
          )}
          {specialItems && (
            <p><span className="font-bold">Special Items:</span> {specialItems}</p>
          )}
          {extraNotes && (
            <p>{extraNotes}</p>
          )}
        </div>
        {/* Push Read More to the bottom to align across cards */}
        <div className="pt-2 mt-auto">
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-[20px] font-motor-oil font-regular text-[#3E4C52] hover:text-[#E15E00] transition-colors"
            aria-label={`Read more about ${title}`}
          >
            {isExpanded ? 'Read Less' : 'Read More'} <img src="/images/services/red-arrow.svg" alt="Arrow" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}


