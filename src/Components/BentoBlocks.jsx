import { useMemo } from "react"

export default function BentoBlocks({bentoBlock = 8 }) {
   
    const content = [{
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto,f_auto,f_auto,f_auto,f_auto,f_auto,f_auto/v1753355416/rg/collective/media/travel-2-jellyfish-diver-people-_dsc8706-1753355415815.jpg"
    }, {
        src: "https://res.cloudinary.com/roundglass/image/upload/w_1000,c_fill,g_face,f_jpg,f_auto/v1751644228/rg/collective/media/get-to-us-get-involved-1751644228044.jpg"
    }]

    const allImages = useMemo(function() {
        if(content.length <= bentoBlock) {
            return [...content];
        }

        if(content.length > bentoBlock) {
            return [...content.slice(0, bentoBlock)]
        }


    }, []);

    return (
        <div className="grid grid-cols-4 grid-rows-2 items-start grid-flow-row auto-row-fr gap-6 mx-[96px]">
            {allImages.map((content, idx) => {
                return (
                    <div className={`${(bentoBlock === 4 || bentoBlock === 5) && idx === 0 ? "col-span-2 row-span-2" : ""} ${(bentoBlock === 4 && idx === 1) ? "col-span-2 row-span-1" : ""} ${bentoBlock ===  7 && idx === allImages.length - 1 ? "col-span-2" : ""}`} >
                        <img className={`${bentoBlock === 8 || bentoBlock === 5 ? "aspect-square" : ""} ${bentoBlock === 7 && idx === allImages.length - 1 ? "aspect-[2.1/1]" : ""} ${bentoBlock === 4 && idx === 1 ? "aspect-[2.1/1]" : ""}`} src={content["src"]} alt="" />
                    </div>
                )
            })}
        </div>
    )
}