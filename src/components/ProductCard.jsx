import productLogo from '../assets/icons/Product_Logo.svg'
import ellipse from '../assets/icons/Ellipse.svg'
function ProductCard({ image, title, name, price, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-2 w-full max-w-[308px] ${className}`}>
      <div className="bg-white w-full aspect-square max-h-[320px] rounded-[32px] p-3 gap-2.5 flex flex-col items-center justify-center relative">
        <img src={productLogo} alt="logo" className="absolute top-6 left-6 w-[154px] h-[167px] z-0" />
        <img src={image} alt="product" className="w-[151px] h-[201px] object-contain rounded-lg z-10" />
      </div>
      <div className="flex items-center gap-2 self-start">
        <img src={ellipse} alt="" className="w-1.5 h-1.5" />
        <p className="font-inter font-normal text-sm leading-[160%] tracking-[-0.02em] text-[#2E2E2E]/80">{title}</p>
      </div>
      <p className="font-semibold text-[20px] leading-[120%] tracking-[-0.02em] text-[#23282B] self-start">{name}</p>
      <p className="font-inter font-semibold text-[16px] leading-[160%] tracking-[-0.02em] text-[#E48156] self-start">{price}</p>
    </div>
  )
}

export default ProductCard
