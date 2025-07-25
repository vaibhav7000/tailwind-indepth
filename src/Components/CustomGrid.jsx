export default function CustomGrid() {

    return (
        <div className="grid grid-cols-[minmax(0,_500px)_1fr_1fr] grid-rows-1">
            <div className="bg-red-400">
                Item 1
            </div>

            <div className="bg-yellow-400">
                Item 2
            </div>

            <div className="bg-green-400">
                Item 3
            </div>
        </div>
    )
}