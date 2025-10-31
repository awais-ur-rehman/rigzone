import type { ReactNode } from 'react';

type DetailCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    footer?: ReactNode;
};

export function DetailCard({ title, description, imageUrl, footer }: DetailCardProps) {
    return (
        <div className="bg-[#E5E8EB] shadow-[0_4px_4px_rgba(0,0,0,0.1)] h-[420px]">
            <div className="h-1/2 w-full overflow-hidden bg-[#E9EDF0]">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 space-y-2 h-1/2 space-y-8">
                <h3 className="text-[24px] font-motor-oil text-[#3E4C52] leading-tight">{title}</h3>
                <p className="text-[18px] font-inter text-[#3E4C52] leading-snug">
                    {description}
                </p>
                {footer}
            </div>
        </div>
    );
}


