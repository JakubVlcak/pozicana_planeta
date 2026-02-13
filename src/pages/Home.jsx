import logo from '../assets/icons/Logo_PP.svg'
import arrow from '../assets/icons/Arrow.svg'
import cardBg from '../assets/pictures/card_background.png'
import bird from '../assets/pictures/bird.png'
import bag from '../assets/icons/Bag.svg'
import user from '../assets/icons/user.svg'
import symbol from '../assets/icons/symbol.svg'
import sea1 from '../assets/pictures/sea1.png'
import sea2 from '../assets/pictures/sea2.png'
import PillButton from '../components/PillButton'

function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-6 gap-10">
      <div className="w-full max-w-348 flex flex-col lg:flex-row lg:h-175 gap-4">
        <div className="w-full lg:w-1/2 rounded-4xl bg-[#294E3B] p-6 md:p-10 flex flex-col min-h-[400px] lg:min-h-0">
          <div className="flex flex-wrap items-center gap-4 md:gap-10 font-semibold">
            <img src={logo} alt="Požičaná Planéta" className="w-32 md:w-40" />
            <a href="#" className="text-sm hover:underline text-white">Pre partnerov</a>
            <a href="#" className="text-sm hover:underline text-white">Pre učiteľov</a>
            <a href="#" className="text-sm hover:underline text-white">Produkty</a>
          </div>
          <div className="m-auto">
            <h1 className="text-left text-3xl md:text-5xl xl:text-[62px] font-semibold text-white leading-none">Vzdelávame deti, aby chránili planétu</h1>
            <p className="text-[16px] text-white/80 font-light mt-4 font-inter">Environmentálne vzdelávanie pre základné a stredné školy,<br /> ktoré spája emóciu, vedomosti a reálnu zmenu správania.</p>
            <button className="mt-6 bg-[#E48156] text-[#FFFF] font-semibold text-sm px-6 py-3 rounded-full">Chcem podporiť projekt</button>
          </div>
          <div className="flex items-center gap-3 text-white mt-auto">
            <button className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/10">
              <img src={arrow} alt="previous" className="w-2.5 h-2.5 rotate-180" />
            </button>
            <span className="text-sm font-medium">1/3</span>
            <button className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/10">
              <img src={arrow} alt="next" className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-4xl bg-cover bg-center relative overflow-hidden min-h-[400px] lg:min-h-0" style={{ backgroundImage: `url(${cardBg})` }}>
          <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-[#294E3B]/40 to-transparent"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
          <img src={bird} alt="bird" className="absolute inset-0 w-full h-full object-contain rotate-180 -scale-y-120 -translate-x-20 -translate-y-10 scale-120 z-[2]" />
          <div className="absolute top-20 right-6 md:right-17 z-[1] bg-[#ECE9E0] rounded-2xl p-6 flex flex-col gap-3 max-w-[300px]">
            <img src={symbol} alt="symbol" className="w-8 h-8" />
            <p className="text-[#2E2E2E]/80 text-sm font-medium font-inter italic leading-snug">Našu planétu sme nezdedili <br /> od našich otcov, požičali <br /> sme si ju od našich detí.</p>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
             <button className="w-11 h-11 rounded-full backdrop-blur-[8px] bg-white/30 flex items-center justify-center hover:bg-white/10">
            <img src={bag} alt="bag" className="w-3.5 h-3.5" />
            </button>
            <button className="h-11 rounded-full backdrop-blur-[8px] bg-white/30 flex items-center gap-2 px-4 hover:bg-white/10 text-white text-sm font-medium">
              <span>Prihlásiť sa</span>
              <img src={user} alt="user" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
       {/* New section */}
      <div className="w-full max-w-348 flex flex-col items-start gap-4 mt-10">
        <PillButton label="Problém" />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-105">
          <h1 className='font-semibold text-2xl md:text-4xl text-[#23282B] lg:whitespace-nowrap'>Keď príroda mizne <br />pred našimi očami</h1>
          <p className='font-inter font-normal text-base text-[#23282B]/80 mb-10'>Hoci ľudstvo dosiahlo úžasný technický a informačný pokrok, priepastne za ním zaostáva mentálny vývoj ľudí. Stále nás ovláda chamtivosť a tak sme dopustili, že planétu ovládol konzum. Dôsledkom je drancovanie prírodných zdrojov, klimatická zmena, straty biodiverzity, devastovanie biotopov, či znečistenie. To všetko sa spája do závratného globálneho ekologického dlhu. Zašlo to až tak ďaleko, že prírodné ekosystémy už nie sú schopné obnovy. Utešujeme sa skreslenými predstavami o kvalite života a presviedčame sa, že to nie je také zlé. V skutočnosti je to oveľa horšie.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 flex flex-col">
            <div className="h-60 md:h-96 rounded-4xl bg-cover bg-center" style={{ backgroundImage: `url(${sea1})` }}></div>
            <p className="text-base font-medium text-[#2E2E2E]/80 mt-2">*Ras Mohammed, Červené more – rok 2010</p>
          </div>
          <div className="flex-1 flex flex-col">
          <div className="flex-1 h-60 md:h-96 rounded-4xl bg-cover bg-center" style={{ backgroundImage: `url(${sea2})` }}></div>
          <p className="text-base font-medium text-[#2E2E2E]/80 mt-2">*Ras Mohammed, Červené more – dnes</p>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Home
