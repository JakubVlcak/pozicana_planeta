function BlogCard({ image, theme, title, date }) {
  return (
    <div className="w-full lg:w-[416px] h-[400px] rounded-[32px] overflow-hidden flex flex-col bg-white">
      <div className="w-full h-[244px] rounded-[32px] overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 mt-4 pl-4">
        <button className="w-fit rounded-full py-2 px-3.5 bg-[#ECE9E0] text-sm font-medium text-[#2E2E2E]">
          {theme}
        </button>
        <h3 className="font-semibold text-xl leading-[120%] tracking-[-0.02em] text-[#23282B]">{title}</h3>
        <p className="font-inter font-normal text-sm leading-[160%] tracking-[-0.02em] text-[#2E2E2E]">{date}</p>
      </div>
    </div>
  )
}

export default BlogCard
