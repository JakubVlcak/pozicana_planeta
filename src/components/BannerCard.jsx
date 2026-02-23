import PillButton from './PillButton'
import bannerVector from '../assets/icons/banner_vector.svg'

function BannerCard({ pill, title, description, buttonLabel, linkLabel, className = '' }) {
  return (
    <div className={`w-full max-w-[632px] h-[400px] rounded-[32px] bg-[#294E3B] flex flex-col items-center justify-center gap-4 px-[26px] py-[104px] relative overflow-hidden ${className}`}>
      <img src={bannerVector} alt="" className="absolute inset-0 w-full h-full pointer-events-none" />
      <PillButton label={pill} className="bg-transparent! text-white! border border-white z-10" dotWhite />
      <h2 className="font-semibold text-[42px] leading-[100%] tracking-[-0.04em] text-center text-white z-10">{title}</h2>
      <p className="font-inter font-normal text-base leading-[160%] tracking-[-0.02em] text-center text-white/80 z-10">{description}</p>
      <div className="flex items-center gap-3 z-10">
        <button className="bg-[#E48156] text-white font-semibold text-base leading-[130%] tracking-[-0.01em] px-5 py-3 rounded-full">{buttonLabel}</button>
        {linkLabel && <button className="bg-white/30 text-white font-semibold text-base leading-[130%] tracking-[-0.01em] px-5 py-3 rounded-full">{linkLabel}</button>}
      </div>
    </div>
  )
}

export default BannerCard
