import ellipse from '../assets/icons/Ellipse.svg'

function PillButton({ label, className = '', dotWhite = false }) {
  return (
    <button className={`flex items-center gap-2 bg-[#E3DDCB] text-[#2E2E2E] rounded-full px-5 py-2.5 ${className}`}>
      <img src={ellipse} alt="" className="w-1.5 h-1.5" style={dotWhite ? { filter: 'brightness(0) invert(1)' } : {}} />
      <span className="text-inherit">{label}</span>
    </button>
  )
}

export default PillButton
