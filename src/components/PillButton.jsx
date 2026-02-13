import ellipse from '../assets/icons/Ellipse.svg'

function PillButton({ label }) {
  return (
    <button className="flex items-center gap-2 bg-[#E3DDCB] rounded-full px-5 py-2.5">
      <img src={ellipse} alt="" className="w-1.5 h-1.5" />
      <span className="text-[#2E2E2E]">{label}</span>
    </button>
  )
}

export default PillButton
