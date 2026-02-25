import productLogo from '../assets/icons/Product_Logo.svg'
import logoPP from '../assets/icons/Logo_PP.svg'
import phoneIcon from '../assets/icons/Phone.svg'
import mailIcon from '../assets/icons/Mail.svg'
import pointVector from '../assets/icons/point_Vector.svg'
import instagramSocial from '../assets/icons/instagram_social.svg'
import facebookSocial from '../assets/icons/facebook_social.svg'

function Footer() {
  return (
    <footer className="w-full max-w-348 rounded-[32px] bg-[#2C2C2C] relative overflow-hidden px-6 py-10 md:px-14 md:py-14">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
        {/* Newsletter */}
        <div className="flex flex-col gap-6 max-w-[377px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[28px] leading-[100%] tracking-[-0.03em] text-white">Prihláste sa na odber noviniek</h3>
            <p className="font-inter font-normal text-base leading-[160%] tracking-[-0.02em] text-white/80">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Zadajte e-mail"
              className="w-full sm:w-[246px] h-[52px] rounded-[14px] px-[18px] py-3 border border-white/6 bg-white/8 backdrop-blur-[12px] text-white/60 font-inter text-sm leading-[160%] tracking-[-0.02em] placeholder:text-white/60 outline-none"
            />
            <button className="w-full sm:w-[115px] h-[52px] rounded-full bg-[#A08D85] opacity-50 flex items-center justify-center">
              <span className="font-semibold text-base leading-[130%] tracking-[-0.01em] text-white">Prihlásiť sa</span>
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Navigácia */}
          <div className="flex flex-col gap-3">
            <span className="text-white/50 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle">Navigácia</span>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Pre partnerov</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Pre učiteľov</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Produkty</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Deň pre planétu</a>
          </div>
          {/* Informácie */}
          <div className="flex flex-col gap-3">
            <span className="text-white/50 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle">Informácie</span>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">O nás</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">O programe</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Aktuality</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Kontakt</a>
          </div>
          {/* Právne dokumenty */}
          <div className="flex flex-col gap-3">
            <span className="text-white/50 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle">Právne dokumenty</span>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">VOP</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Ochrana osobných údajov</a>
            <a href="#" className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle hover:text-white">Dokumenty k fondom EU</a>
          </div>
          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <span className="text-white/50 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle">Kontakt</span>
            <span className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle flex items-center gap-2"><img src={phoneIcon} alt="" className="w-4 h-4" />+421 948 337 500</span>
            <span className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle flex items-center gap-2"><img src={mailIcon} alt="" className="w-4 h-4" />info@pozicanaplaneta.sk</span>
            <span className="text-white/80 font-semibold text-base leading-[130%] tracking-[-0.01em] align-middle flex items-center gap-2"><img src={pointVector} alt="" className="w-4 h-4" />Farská 22, 949 01 Nitra</span>
            <div className="flex items-center gap-3 mt-1">
              <a href="#" className="w-[46px] h-[46px] rounded-[100px] bg-[#FFFFFF14] flex items-center justify-center">
                <img src={instagramSocial} alt="Instagram" />
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-[100px] bg-[#FFFFFF14] flex items-center justify-center">
                <img src={facebookSocial} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between mt-10 gap-6">
        <img src={logoPP} alt="Požičaná Planéta" className="w-[160px] md:w-[233px]" />
        <div className="border-t border-[#FFFFFF0F] pt-4">
          <span className="font-medium text-base leading-[130%] tracking-[-0.01em] align-middle text-[#FFFFFF99]">© Požičaná planéta. Všetky práva vyhradené.</span>
        </div>
      </div>

      <img src={productLogo} alt="" className="absolute bottom-0 right-[-90px] w-[299px] h-[325px] opacity-[0.12] hidden md:block" style={{ filter: 'brightness(0) invert(1)' }} />
    </footer>
  )
}

export default Footer
