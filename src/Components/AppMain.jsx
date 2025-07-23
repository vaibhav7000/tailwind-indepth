export default function AppMain() {

    return (
        <div className="h-screen w-screen flex gap-x-4 flex-wrap">
            <div className="font-mono sm:font-sans md:font-Nunito lg:font-(family-name:--custom-font-bebas)">
                Font-Family
            </div>

            <div className="font-(family-name:--custom-font-bebas) sm:font-(family-name:--custom-font-bebas) sm:text-2xl md:text-7xl lg:text-[70px] xl:text-fourty 2xl:text-(length:--custom-font-size-20)">
                font-size
            </div>

            <div className="font-thin sm:font-extrabold md:font-three lg:font-(--custom-fw-900)">
                font-weight
            </div>

            <div className="tracking-tighter sm:tracking-tight md:tracking-normal lg:tracking-widest xl:tracking-custom-space-10 2xl:tracking-space-40">
                Letter-spacing | Tracking

                <div className="tracking-(--letter-spacing-50)">
                    Letter-spacing
                </div>
            </div>

            <div className="w-[100px] h-[100px] bg-red-500">
                line-clamp
                <div className="line-clamp-3 sm:line-clamp-(--clamp-3)">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum praesentium magni porro animi. Omnis mollitia non quia a, sequi tempora. Harum nesciunt hic aliquam qui repudiandae delectus cum quae et!
                </div>
            </div>


            {/* line height will be 40*(--spacing = 4) = 80 */}
            <div className="text-xl/40 sm:text-2xl/(--height-line-custom-40)">
                Font-size with line-height
            </div>


        </div>
    )
}