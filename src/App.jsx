

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

    <div className="text-2xl/4 sm:text-twenty-size/(--line-height-20) sm:text-red-500 md:leading-0 lg:leading-1 xl:leading-10">
      Line-height
    </div>

    <div>
      Lists with icons as points
      <ul className="list-image-[url(./assets/react.svg)] sm:list-image-(--vite-logo) md:list-image-none">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

    <div>
      Lists with different points
      <ul className="list-disc list-inside">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>

      <ul className="list-decimal list-outside sm:list-(--built-points)">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>

    </div>
  )
}