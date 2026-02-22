import symbol from '../assets/icons/symbol.svg'

function ReviewCard({ quote, name, school, photo, dark = false, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 w-full max-w-[416px] ${className}`}>
      <div className={`${dark ? 'bg-[#294E3B]' : 'bg-white'} w-full min-h-[490px] rounded-[32px] p-6 flex flex-col gap-4`}>
        <img src={symbol} alt="quote" className="w-8 h-8" style={dark ? { filter: 'brightness(0) saturate(100%) invert(62%) sepia(56%) saturate(522%) hue-rotate(338deg) brightness(92%) contrast(87%)' } : {}} />
        <p className={`font-inter font-normal italic text-[16px] leading-[160%] tracking-[-0.02em] opacity-80 ${dark ? 'text-white' : 'text-[#2E2E2E]'}`}>{quote}</p>
        <div className="flex items-center gap-3 mt-auto">
          <img src={photo} alt={name} className="w-[60px] h-[60px] rounded-[18px] object-cover" />
          <div className="flex flex-col">
            <p className={`font-inter font-semibold text-[16px] leading-[156%] tracking-[-0.02em] ${dark ? 'text-white' : 'text-[#2E2E2E]'}`}>{name}</p>
            <p className={`font-inter font-normal text-[14px] leading-[160%] tracking-[-0.02em] opacity-80 ${dark ? 'text-white' : 'text-[#2E2E2E]'}`}>{school}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
