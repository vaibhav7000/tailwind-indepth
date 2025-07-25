export default function GRID() {

    return (
        <div className="grid bg-teal-400 grid-cols-4 grid-rows-3">

            <div className="bg-yellow-400 col-span-2">
                item-1
            </div>

            <div className="bg-red-400 col-span-full">
                item-2
            </div>

            <div className="bg-blue-400 sm:col-span-(--span-two)">
                item-3
            </div>

            <div className="bg-green-400 col-span-3 sm:col-1">
                item-4
            </div>

        </div>
    )
}