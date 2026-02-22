import logo from '../assets/icons/Logo_PP.svg'
import arrow from '../assets/icons/Arrow.svg'
import cardBg from '../assets/pictures/card_background2.png'
import bird from '../assets/pictures/bird.png'
import symbol from '../assets/icons/symbol.svg'
import sea1 from '../assets/pictures/sea1.png'
import sea2 from '../assets/pictures/sea2.png'
import bgImage3 from '../assets/pictures/backgrounimage3.png'
import bgImage4 from '../assets/pictures/backgroundimag4.png'
import bgImage5 from '../assets/pictures/backgroundimage5.png'
import PillButton from '../components/PillButton'
import ActionButton from '../components/ActionButton'
import ProductCard from '../components/ProductCard'
import ReviewCard from '../components/ReviewCard'
import Aktualita from '../components/Aktualita'
import product1 from '../assets/pictures/products/Product1.png'
import product2 from '../assets/pictures/products/Product2.png'
import product3 from '../assets/pictures/products/Product3.png'
import product4 from '../assets/pictures/products/Product4.png'
import teacher1 from '../assets/pictures/teacher/teacher1.png'
import teacher2 from '../assets/pictures/teacher/teacher2.png'
import teacher3 from '../assets/pictures/teacher/teacher3.png'

function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-6 gap-10 overflow-x-hidden">
      <div className="w-full max-w-348 flex flex-col lg:flex-row lg:h-175 gap-4">
        <div className="w-full lg:w-1/2 rounded-4xl bg-[#294E3B] p-6 md:p-10 flex flex-col min-h-[400px] lg:min-h-0">
          <div className="flex flex-wrap items-center gap-4 md:gap-10 font-semibold">
            <img src={logo} alt="Požičaná Planéta" className="w-32 md:w-40" />
            <a href="#" className="text-sm hover:underline text-white">Pre partnerov</a>
            <a href="#" className="text-sm hover:underline text-white">Pre učiteľov</a>
            <a href="#" className="text-sm hover:underline text-white">Produkty</a>
          </div>
          <div className="m-auto">
            <h1 className="text-left text-3xl md:text-5xl xl:text-[62px] font-semibold text-white leading-none">Komplexný program environmentálnej výchovy, vzdelávania a osvety</h1>
            <p className="text-[16px] text-white/80 font-light mt-4 font-inter">{"\u201ENa\u0161u plan\u00E9tu sme nezdedili od na\u0161ich otcov,"}<br />{" po\u017Ei\u010Dali sme si ju od na\u0161ich det\u00ED.\u201C"}</p>
            <ActionButton label="Chcem podporiť projekt" className="mt-6" />
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
        <div className="w-full lg:w-1/2 rounded-4xl bg-cover bg-center relative overflow-hidden min-h-[400px] lg:min-h-0" style={{ backgroundImage: `url(${cardBg})`, backgroundSize: '220%', backgroundPosition: 'center 80%' }}>
          <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-[#294E3B]/40 to-transparent"></div>
          <div className="absolute inset-0 backdrop-blur-[4px] bg-gray-600/35"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent z-[1]"></div>
          <img src={bird} alt="bird" className="absolute inset-0 w-full h-full object-contain rotate-180 -scale-y-120 translate-x-[-40px] -translate-y-5 scale-150 -scale-x-120 z-[2]" />
          <div className="absolute top-32 md:top-50 right-4 md:right-5 z-[1] bg-[#ECE9E0] rounded-2xl p-4 md:p-6 flex flex-col gap-3 max-w-[250px] md:max-w-[300px]">
            <img src={symbol} alt="symbol" className="w-8 h-8" />
            <p className="text-[#2E2E2E]/80 text-sm font-medium font-inter italic leading-snug">Za posledných 50 rokov<br /> zmizlo zo Zeme 70 %<br /> živých organizmov.</p>
            <p className="text-[#2E2E2E]/80 text-sm font-semibold font-inter">WWF <br /><span className="font-medium">(Svetový fond na ochranu prírody)</span></p>
          </div>

          <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
          {/*
             <button className="w-11 h-11 rounded-full backdrop-blur-[8px] bg-white/30 flex items-center justify-center hover:bg-white/10">
            <img src={bag} alt="bag" className="w-3.5 h-3.5" />
            </button>

            <button className="h-11 rounded-full backdrop-blur-[8px] bg-white/30 flex items-center gap-2 px-4 hover:bg-white/10 text-white text-sm font-medium">
              <span>Prihlásiť sa</span>
              <img src={user} alt="user" className="w-3.5 h-3.5" />
            </button>
            */}
          </div>
          <p className="absolute bottom-6 left-0 right-0 z-[3] font-semibold text-sm md:text-[18px] text-white text-center px-4">*Smutným príkladom straty biodiverzity na Slovensku je krakľa belasá.</p>
        </div>
      </div>

      {/* Problem section */}
      <div className="w-full max-w-348 flex flex-col items-start gap-4 mt-10 px-4 lg:px-0">
        <PillButton label="Problem" />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-105">
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl md:text-4xl text-[#23282B] lg:whitespace-nowrap">Keď život (príroda) mizne <br />doslova pred očami</h1>
            <ActionButton label="Viac o programe" className="mt-1" />
          </div>
          <p className="font-inter font-normal text-base text-[#23282B]/80 mb-10 lg:-ml-22">{"Viac ako 25 rokov, po\u010Das viac ako 100 exped\u00EDci\u00ED, dokumentujeme najm\u00E4 vodn\u00E9 ekosyst\u00E9my. S prib\u00FAdaj\u00FAcimi rokmi v\u0161ak st\u00E1le viac poci\u0165ujeme bezn\u00E1dej z drastick\u00FDch "}<br />{"a dramaticky r\u00FDchlych zmien, ke\u010F n\u00E1m \u017Eivot mizne doslova pred o\u010Dami. M\u00F4\u017Eeme iba potvrdi\u0165 z\u00E1very svetov\u00E9ho fondu na ochranu pr\u00EDrody (WWF): \u201Eza posledn\u00FDch 50 rokov zmizlo zo zemsk\u00E9ho povrchu 70% \u017Eiv\u00FDch organizmov\u201C. Na\u0161a vlastn\u00E1 sk\u00FAsenos\u0165 je hnac\u00EDm motorom na\u0161ej amb\u00EDcie, prispie\u0165 ku zmene. Apelova\u0165 na mlad\u00FDch \u013Eud\u00ED, ktor\u00FDch \u00FAlohou bude vysporiad\u00FA\u0165 sa s gigantick\u00FDm ekologick\u00FDm dlhom, ktor\u00FD im zanech\u00E1me. Na\u0161\u00EDm poslan\u00EDm sa st\u00E1va tvorba p\u00FAtav\u00E9ho a zrozumite\u013En\u00E9ho programu pre environment\u00E1lnu v\u00FDchovu, vzdel\u00E1vanie a osvetu."}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 flex flex-col">
            <div className="h-60 md:h-96 rounded-4xl bg-cover bg-center" style={{ backgroundImage: `url(${sea1})` }}></div>
            <p className="text-base font-medium text-[#2E2E2E]/80 mt-2">Obr útes živý, Ras Mohammed, Červené more – rok 2002</p>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="h-60 md:h-96 rounded-4xl bg-cover bg-center" style={{ backgroundImage: `url(${sea2})` }}></div>
            <p className="text-base font-medium text-[#2E2E2E]/80 mt-2">Obr útes mŕtvy, Ras Mohammed, Červené more – rok 2017</p>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="w-full max-w-348 flex flex-col items-center gap-4 mt-10 px-4 lg:px-0">
        <PillButton label="Vzdelávanie" />
        <h1 className="font-semibold text-2xl md:text-4xl text-[#23282B] text-center">Východiskom je vzdelávanie</h1>
        <p className="font-inter font-normal text-base text-[#23282B]/80 text-center max-w-3xl">Hoci ľudstvo dosiahlo úžasný technický a informačný pokrok, priepastne za ním zaostáva mentálna úroveň ľudí. Stále nás ovláda chamtivosť a tak sme dopustili, že planétu ovládol konzum. Dôsledkom je drancovanie prírodných zdrojov, znečistenie, klimatická zmena a obrovské straty biodiverzity. Zašlo to až tak ďaleko, že mnohé prírodné ekosystémy už nie sú schopné obnovy. Musíme si uvedomiť, že kvalitu nášho života v prvom rade ovplyvňuje stav životného prostredia, musíme sa opäť, od základov učiť, prírode rozumieť a prírodu rešpektovať. Musíme sa učiť chrániť život na našej planéte. Už nesmieme strácať čas.</p>
        <ActionButton label="Viac pre učiteľov" />
        <div className="w-full max-w-[1280px] h-[300px] md:h-[450px] lg:h-[550px] rounded-[32px] bg-cover bg-center mt-10 relative overflow-hidden" style={{ backgroundImage: `url(${bgImage3})` }}>
          <div className="absolute bottom-6 left-6 z-[1] bg-[#ECE9E0] rounded-2xl p-4 md:p-6 flex flex-col gap-3 max-w-[250px] md:max-w-[300px]">
            <img src={symbol} alt="symbol" className="w-8 h-8" />
            <p className="text-[#2E2E2E]/80 text-sm font-medium font-inter italic leading-snug">Environmantalne vzdelávanie <br />- naša zodpovednosť voči <br />budúcim generáciám.</p>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="w-full max-w-348 flex flex-col items-center gap-4 mt-10 px-4 lg:px-0">
        <PillButton label="Produkty" />
        <h1 className="font-semibold text-2xl md:text-4xl text-[#23282B] text-center">Výstupy programu Požičaná planéta</h1>

        <p className="font-inter font-normal text-base text-[#23282B]/80 text-center max-w-3xl">Doteraz sme v rámci programu Požičaná planéta vytvorili didaktické učebné pomôcky a publikácie v štyroch tematických okruhoch: Požičaná planéta I.– Odcudzenie, Požičaná planéta II.– Konzum, Požičaná planéta III.– Biodiverzita, Požičaná planéta IV.– Zmena klímy. Každý tematický okruh tvoria 4 dokumentárne filmy, publikácia, odborná metodická príručka pre pedagogickú prax a 4 enviro-zošity. Spolu 16 dokumentárnych filmov, 16 enviro-zošitov, 4 odborné metodické príručky pre pedagógov, 4 publikácie, celkom 333 environmentálnych úloh a aktivít.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <ActionButton label="Registrovať sa ako učiteľ" />
          <ActionButton label="Zobraziť všetky produkty" className="bg-transparent! text-[#E48156]! border border-[#E48156]" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="relative w-full">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center">
            <ProductCard image={product1} title={"Požičaná planéta I. - Odcudzenie"} name={"Enviro-zošit: Kráľovná Karpát"} price="34.00 €" />
            <ProductCard image={product2} title={"Požičaná planéta I. - Odcudzenie"} name={"Enviro-zošit: Kráľovná Karpát"} price="34.00 €" />
            <ProductCard image={product3} title={"Požičaná planéta I. - Odcudzenie"} name={"Enviro-zošit: Kráľovná Karpát"} price="34.00 €" />
            <ProductCard image={product4} title={"Požičaná planéta I. - Odcudzenie"} name={"Enviro-zošit: Kráľovná Karpát"} price="34.00 €" />
          </div>
          <button className="hidden lg:flex absolute left-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-[#DDD7C2] items-center justify-center hover:bg-[#DDD7C2]/80 z-10">
            <img src={arrow} alt="previous" className="w-2.5 h-2.5 rotate-180" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1200%) hue-rotate(30deg) brightness(95%) contrast(90%)' }} />
          </button>
          <button className="hidden lg:flex absolute right-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-[#DDD7C2] items-center justify-center hover:bg-[#DDD7C2]/80 z-10">
            <img src={arrow} alt="next" className="w-2.5 h-2.5" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1200%) hue-rotate(30deg) brightness(95%) contrast(90%)' }} />
          </button>
          <div className="flex justify-center items-center gap-2 mt-6 w-full">
            <div className="w-[16px] h-[6px] rounded-full bg-[#DDD7C2]"></div>
            <div className="w-[40px] h-[6px] rounded-full bg-[#294E3B]"></div>
            <div className="w-[16px] h-[6px] rounded-full bg-[#DDD7C2]"></div>
          </div>
        </div>
        <PillButton label="Referencie učiteľov" className="mt-50" />

        <h1 className="font-semibold text-2xl md:text-4xl text-[#23282B] text-center">{"\u0053k\u00FAsenosti u\u010Dite\u013Eov z praxe"}</h1>
        <div className="relative w-full mt-10">
          <div className="flex flex-col items-center md:flex-row md:flex-wrap lg:flex-nowrap gap-6 justify-center">
            <ReviewCard quote="Program Požičaná planéta vnímam ako veľmi kvalitnú pomôcku pre environmentálne vzdelávanie. Materiály sú spracované zrozumiteľne, vekovo primerane a zároveň ponúkajú dostatok priestoru na diskusiu so žiakmi. Deti si vďaka nim uvedomujú súvislosti medzi každodennými rozhodnutiami a stavom životného prostredia. Oceňujem aj metodické odporúčania, ktoré mi uľahčujú prípravu hodín." name={"Mgr. Jana Kov\u00E1\u010Dov\u00E1"} photo={teacher1} school={"Z\u00E1kladn\u00E1 \u0161kola, Trnava"} />
            <ReviewCard quote="Materiály z Požičanej planéty využívam pravidelne a dlhodobo. Sú prehľadné, vizuálne kvalitné a tematicky veľmi aktuálne. Oceňujem, že reflektujú reálne problémy dnešného sveta a vedú deti k zodpovednému postoju k prírode. Pre učiteľa je veľkým plusom aj to, že materiály možno prispôsobiť rôznym predmetom." name="Mgr. Jana Kováčová" photo={teacher2} dark school={"Z\u00E1kladn\u00E1 \u0161kola, Trnava"} />
            <ReviewCard quote="Na Požičanej planéte si najviac cením prepojenie teórie s praxou. Žiaci neostávajú len pri faktoch, ale učia sa premýšľať, klásť otázky a hľadať riešenia. Program prirodzene rozvíja kritické myslenie a podporuje diskusiu v triede. Počas hodín vidím väčší záujem zo strany detí, čo považujem za veľký prínos." name="PaedDr. Martin Novák" photo={teacher3} school={"Z\u00E1kladn\u00E1 \u0161kola, Trnava"} />
          </div>
          <button className="hidden lg:flex absolute left-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-[#DDD7C2] items-center justify-center hover:bg-[#DDD7C2]/80 z-10">
            <img src={arrow} alt="previous" className="w-2.5 h-2.5 rotate-180" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1200%) hue-rotate(30deg) brightness(95%) contrast(90%)' }} />
          </button>
          <button className="hidden lg:flex absolute right-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-[#DDD7C2] items-center justify-center hover:bg-[#DDD7C2]/80 z-10">
            <img src={arrow} alt="next" className="w-2.5 h-2.5" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1200%) hue-rotate(30deg) brightness(95%) contrast(90%)' }} />
          </button>
          <div className="flex justify-center items-center gap-2 mt-6 w-full">
            <div className="w-[16px] h-[6px] rounded-full bg-[#DDD7C2]"></div>
            <div className="w-[40px] h-[6px] rounded-full bg-[#294E3B]"></div>
            <div className="w-[16px] h-[6px] rounded-full bg-[#DDD7C2]"></div>
          </div>
        </div>
      </div>

      <Aktualita image={bgImage4} className="lg:ml-40" pillLabel={"\u0053\u00FA\u0165a\u017E"} heading={"Klimatick\u00E1 sebazmena"} description={"Organiz\u00E1tori festivalu udr\u017Eate\u013En\u00E9ho \u017Eivota De\u0148 pre plan\u00E9tu 2026 vyhl\u00E1sil pod patron\u00E1tom Slovensk\u00E9ho hydrometeorologick\u00E9ho \u00FAstavu s\u00FA\u0165a\u017E t\u00EDmov z\u00E1kladn\u00FDch a stredn\u00FDch \u0161k\u00F4l \u201EKlimatick\u00E1 sebazmena\u201C. Zapojte sa so svoj\u00EDm \u0161kolsk\u00FDm t\u00EDmom do trojkolovej kore\u0161ponden\u010Dnej s\u00FA\u0165a\u017Ee."} buttonLabel={"Viac o s\u00FA\u0165a\u017Ei"} />
      <Aktualita image={bgImage5} reverse pillLabel="Podujatia" className="lg:ml-[-320px]" heading={"De\u0148 pre plan\u00E9tu 2026"} description={"Festival udr\u017Eate\u013En\u00E9ho \u017Eivota De\u0148 pre plan\u00E9tu 2026 sa uskuto\u010Dn\u00ED 5.11. v Aule UKF v Nitre. Jeho s\u00FA\u0165a\u017Eou bude op\u00E4\u0165 vyhodnotenie nieko\u013Ek\u00FDch celoslovensk\u00FDch s\u00FA\u0165a\u017E\u00ED \u017Eiakov z\u00E1kladn\u00FDch a stredn\u00FDch \u0161k\u00F4l, zameran\u00FDch na ochranu biodiverzity, eliminovanie pr\u00ED\u010Din klimatickej zmeny a tie\u017E s\u00FA\u0165a\u017E \u201EUdr\u017Eate\u013En\u00E1 \u0161kola Slovenska za \u0161kolsk\u00FD rok 2025/2026\u201C. U\u017E teraz sa te\u0161\u00EDme na genera\u010Dn\u00E9 di\u0161puty vedcov, pedag\u00F3gov a mana\u017E\u00E9rov firiem so \u017Eiakmi z\u00E1kladn\u00FDch a stredn\u00FDch \u0161k\u00F4l a sprievodn\u00FD program festivalu."} buttonLabel={"Viac o podujat\u00ED"} />
    </main>
  )
}

export default Home
