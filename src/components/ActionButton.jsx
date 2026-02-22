function ActionButton({ label, className = '' }) {
  return (
    <button className={`bg-[#E48156] text-[#FFFF] font-semibold text-sm px-5 py-4 w-fit rounded-full ${className}`}>
      {label}
    </button>
  )
}

export default ActionButton
