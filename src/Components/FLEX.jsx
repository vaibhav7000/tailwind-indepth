export default function Flex() {

    return (
        <div className="w-screen h-screen">
            <div className="flex flex-wrap items-start bg-pink-300 h-1/2 flex-row-reverse sm:flex-row md:flex-col lg:flex-col">
                <div className="bg-pink-500  basis-1/3 w-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis nihil illo ab, debitis provident quos excepturi dignissimos inventore sed animi corporis velit sapiente. Alias itaque rem asperiores perspiciatis quas.
                </div>

                <div className="bg-yellow-500  basis-1/3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit provident dolores ipsa tenetur maxime, quia pariatur esse illum. Ratione amet iste sunt, nemo deleniti dolore magnam magni perferendis nisi aperiam.
                </div>

                <div className="bg-amber-500  basis-1/3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum expedita consectetur cum, eligendi accusamus tenetur beatae fugiat quae quibusdam, accusantium ratione! Ea at maiores quae commodi praesentium omnis harum facilis.
                </div>

                <div className="bg-blue-500  basis-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum possimus sed facere hic dolorem aliquam aperiam esse ullam quo quibusdam delectus, quia nesciunt at aspernatur illum vero provident omnis!
                </div>

                <div className="basis-1/3 bg-teal-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus perspiciatis laudantium voluptatibus, assumenda, exercitationem cum, veniam delectus similique ut ullam quaerat consectetur dolor corporis sed alias. Itaque, velit praesentium?
                </div>


            </div>
        </div>

    )
}


// if all the childs are given eqaul flex-basis without the parent enabling flex-wrap than the items will have eqaul sizing and will be shrinking when more items are added

// values that belongs to flex-basis (utility class -> basis) => basis-number, basis-fraction, basis-full, basis-3xs, 2xs, xs, sm, md, lg, xl, 2xl, ... 7xl, basis-(custom-variable-name), basis does not have any namespace anotation