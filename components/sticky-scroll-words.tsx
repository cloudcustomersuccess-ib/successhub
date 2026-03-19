'use client';

const leftWords = ['Best', 'Premium', 'Key', 'Top', 'Global', 'Cloud'];
const rightWords = ['Support', 'Care', 'Satisfaction', 'Experience', 'Success'];

export default function StickyScrollWords() {
  return (
    <div className="bg-black text-white" style={{ minHeight: '200vh' }}>
      <div
        className="grid gap-4 md:gap-8 max-w-[1600px] mx-auto px-4 md:px-8"
        style={{ gridTemplateColumns: 'repeat(1, 1fr)', }}
      >
        {/* Three-column layout on desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:gap-8 pt-8 md:pt-16">
            {leftWords.map((word, i) => (
              <div
                key={i}
                className="min-h-[35vh] flex items-center justify-end pr-8"
              >
                <span
                  className="text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold leading-none transition-all duration-500"
                  style={{
                    color: i === leftWords.length - 1 ? '#ffffff' : '#444444',
                  }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Center sticky */}
          <div className="sticky top-[45%] h-fit flex items-center justify-center px-8">
            <span className="text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold leading-none whitespace-nowrap">
              Customer
            </span>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 md:gap-8 pt-8 md:pt-16">
            {rightWords.map((word, i) => (
              <div
                key={i}
                className="min-h-[35vh] flex items-center justify-start pl-8"
              >
                <span
                  className="text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold leading-none transition-all duration-500"
                  style={{
                    color: i === rightWords.length - 1 ? '#ffffff' : '#444444',
                  }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden flex flex-col gap-6 pt-8">
          {leftWords.map((word, i) => (
            <div key={i} className="min-h-[25vh] flex items-center justify-center">
              <span
                className="text-[clamp(2rem,10vw,4rem)] font-extrabold leading-none"
                style={{ color: i === leftWords.length - 1 ? '#ffffff' : '#444444' }}
              >
                {word} Customer
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Final static section */}
      <div className="min-h-[40vh] flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center text-center">
          {['Cloud', 'Customer', 'Success'].map((word) => (
            <span
              key={word}
              className="text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold leading-none"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
