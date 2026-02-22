import PillButton from './PillButton'
import ActionButton from './ActionButton'

function Aktualita({ image, reverse = false, pillLabel = '', heading = '', description = '', buttonLabel = '', className = '' }) {
  return (
    <div className={`w-full max-w-348 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-25 mt-10 px-4 lg:px-0 ${className}`}>
      <div className="flex flex-col items-start gap-6 w-full lg:w-[471px]">
        <PillButton label={pillLabel} />
        <h1 className="font-semibold text-2xl md:text-4xl text-[#23282B]">{heading}</h1>
        <p className="font-inter font-normal text-base text-[#23282B]/80">{description}</p>
        <ActionButton label={buttonLabel} className="mt-4" />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-[32px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
  )
}

export default Aktualita
