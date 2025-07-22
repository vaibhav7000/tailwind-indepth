export default function App() {

  return (
    <div className="h-screen flex justify-center items-center flex-col">

      <div className="font-sans sm:font-mono md:font-sofia-pro lg:font-serif xl:font-(family-name:--personal-font) 2xl:font-[Nunito]">
            font-family
      </div>

      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:font-[Nunito] xl:text-8xl xl:text-(length:--my-font-size) xl:text-[20px] xl:text-twelve 2xl:text-7xl">
        font-size
      </div>

      <div className="text-(length:--my-font-size) italic xl:text-twelve">
        font-style
      </div>

      <div className="font-thin text-7xl sm:font-extralight md:font-light xl:font-(--font-400) 2xl:font-extrablack">
        font-weight
      </div>

    <div className="text-7xl">
      <div className="text-base tracking-widest sm:tracking-custom-letter-spacing md:tracking-(--custom-letter-spacing)">
          Letter-spacing / tracking
        </div>
    </div>

    <div className="">
      <div className="w-[100px] bg-red-200 aspect-square line-clamp-none sm:line-clamp-4 md:line-clamp(--custom-line-clamping)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab rem quam, iste debitis voluptate hic at consequuntur, omnis explicabo provident aut, quia laboriosam unde blanditiis maxime corporis asperiores harum.
      </div>
    </div>

    </div>
  )
}