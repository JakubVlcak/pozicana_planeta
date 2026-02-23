import productLogo from '../assets/icons/Product_Logo.svg'
import logoPP from '../assets/icons/Logo_PP.svg'

function Footer() {
  return (
    <footer className="w-full max-w-348 h-[491px] rounded-[32px] bg-[#2C2C2C] relative overflow-hidden">
      {/* Newsletter */}
      <div className="absolute top-[56px] left-[56px] w-[377px] flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-[28px] leading-[100%] tracking-[-0.03em] text-white">Prihláste sa na odber noviniek</h3>
          <p className="font-inter font-normal text-base leading-[160%] tracking-[-0.02em] text-white/80">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center gap-3 w-[373px]">
          <input
            type="email"
            placeholder="Zadajte e-mail"
            className="w-[246px] h-[52px] rounded-[14px] px-[18px] py-3 border border-white/6 bg-white/8 backdrop-blur-[12px] text-white/60 font-inter text-sm leading-[160%] tracking-[-0.02em] placeholder:text-white/60 outline-none"
          />
          <button className="w-[115px] h-[52px] rounded-full bg-[#A08D85] opacity-50 flex items-center justify-center">
            <span className="font-semibold text-base leading-[130%] tracking-[-0.01em] text-white">Prihlásiť sa</span>
          </button>
        </div>
      </div>

      {/* Footer links */}
      <div className="absolute top-[56px] right-[56px] flex gap-16 text-sm">
        {/* Navigácia */}
        <div className="flex flex-col gap-3">
          <span className="text-white/50 font-semibold">Navigácia</span>
          <a href="#" className="text-white/80 font-inter hover:text-white">Pre partnerov</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Pre učiteľov</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Produkty</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Deň pre planétu</a>
        </div>
        {/* Informácie */}
        <div className="flex flex-col gap-3">
          <span className="text-white/50 font-semibold">Informácie</span>
          <a href="#" className="text-white/80 font-inter hover:text-white">O nás</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">O programe</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Aktuality</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Kontakt</a>
        </div>
        {/* Právne dokumenty */}
        <div className="flex flex-col gap-3">
          <span className="text-white/50 font-semibold">Právne dokumenty</span>
          <a href="#" className="text-white/80 font-inter hover:text-white">VOP</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Ochrana osobných údajov</a>
          <a href="#" className="text-white/80 font-inter hover:text-white">Dokumenty k fondom EU</a>
        </div>
        {/* Kontakt */}
        <div className="flex flex-col gap-3">
          <span className="text-white/50 font-semibold">Kontakt</span>
          <span className="text-white/80 font-inter">+421 948 337 500</span>
          <span className="text-white/80 font-inter">info@pozicanaplaneta.sk</span>
          <span className="text-white/80 font-inter">Farská 22, 949 01 Nitra</span>
        </div>
      </div>

      {/* Social icons */}
      <div className="absolute bottom-[56px] right-[56px] flex items-center gap-3">
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-[#E48156] flex items-center justify-center hover:bg-[#d4734a]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/></svg>
        </a>
      </div>

      <img src={logoPP} alt="Požičaná Planéta" className="absolute bottom-[56px] left-[56px] w-[233px] h-[90px]" />

      <img src={productLogo} alt="Požičaná Planéta" className="absolute top-[328px] right-[190px] w-[299px] h-[325px] opacity-12" />
    </footer>
  )
}

export default Footer
