interface HeroBannerProps {
    title: string;
    subtitle: string;
    backgroundImageUrl: string;
    ctaText?: string;
    onCtaClick: () => void;
}

export default function HeroBanner({
    title,
    subtitle,
    backgroundImageUrl,
    ctaText,
    onCtaClick,
}: HeroBannerProps) {
    return (
        <section className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-lg bg-gray-900 group">
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:bg-black/30"></div>
            <img
                src={backgroundImageUrl}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-md mb-4">
                    {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-8 max-w-xl">
                    {subtitle}
                </p>
                <div>
                    <button
                        onClick={onCtaClick}
                        className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white font-bold rounded-full uppercase tracking-wider text-sm md:text-base hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 active:scale-95"
                    >
                        {ctaText || "MUA NGAY KẺO ĐÓI"}
                    </button>
                </div>
            </div>
        </section>
    );
}
