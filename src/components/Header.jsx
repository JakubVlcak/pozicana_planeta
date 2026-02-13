import phoneIcon from '../assets/icons/Phone.svg'
import emailIcon from '../assets/icons/Mail.svg'

function Header() {
  return (
    <header className="bg-[#2C2C2C] w-full max-w-[1440px] mx-auto h-[53px] flex items-center justify-between px-20 py-4">
      <nav className="flex gap-6 text-[#FFFF] font-medium">
        <a href="#" className="text-sm hover:underline">O nás</a>
        <a href="#" className="text-sm hover:underline">O programe</a>
        <a href="#" className="text-sm hover:underline">Deň pre planétu</a>
        <a href="#" className="text-sm hover:underline">Aktuality</a>
        <a href="#" className="text-sm hover:underline">Kontakt</a>
      </nav>
      <div className="flex items-center gap-4 text-[#FFFF] font-medium text-sm">
        <a href="tel:+421000000000" className="flex items-center gap-2">
          <img src={phoneIcon} alt="phone" className="w-4 h-4" />
          <span>+421 948 337 500</span>
        </a>
        <span className="w-px h-4 bg-white/20"></span>
        <a href="mailto:info@pozicanaplaneta.sk" className="flex items-center gap-2">
          <img src={emailIcon} alt="email" className="w-4 h-4" />
          <span>info@pozicanaplaneta.sk</span>
        </a>
      </div>
    </header>
  )
}

export default Header
