export default function GridLayout() {

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr)) minmax(200px, 1fr)",
            gridTemplateRows: "repeat(3, minmax(0, 1fr)",
            border: "1px",
            borderColor: "red",
            borderWidth: "2px",
            borderStyle: "solid"
        }}>
            <div className="bg-red-300 border">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt ex similique possimus architecto quia sunt accusamus nostrum, assumenda, voluptates soluta numquam, distinctio reprehenderit deserunt autem adipisci fuga nisi ratione.
                Illum est ut recusandae ipsa perferendis deleniti perspiciatis repellendus quia? Quae cupiditate, illo accusantium earum, error consequuntur veniam eveniet impedit quaerat repellendus quos. At necessitatibus natus iure, dolor saepe iste!
                Magnam, sint aliquid nesciunt adipisci aspernatur tenetur blanditiis officiis debitis doloremque quae, nemo quas. Ad, nobis! Consectetur qui tenetur culpa laboriosam, ex omnis suscipit dolor molestiae repudiandae quos expedita. Quaerat.
                Laudantium inventore est neque alias eligendi incidunt voluptates accusamus doloribus, quos et magni? At eaque magni dolores sapiente, necessitatibus expedita ipsam in. Voluptates veniam neque quae deleniti temporibus sunt odit?
                Ab laboriosam hic natus quaerat facere? Omnis sapiente adipisci amet nostrum odit magnam voluptates molestias, delectus voluptatem. Natus, tempore sint voluptatem ut, quod dignissimos eum error explicabo, cumque est esse.
                Dolorum laborum minus illum modi impedit temporibus, eligendi, placeat eos odit, obcaecati soluta sed asperiores nulla recusandae aut labore corporis sunt voluptatibus consequuntur. Alias quaerat laudantium quidem, repudiandae debitis ducimus?
                Eius rem fugiat iure! Consequatur laboriosam dolor expedita nesciunt ratione! Quod voluptatibus voluptatum beatae iure fuga corrupti dicta officia. Consequatur neque qui non, quisquam quis reiciendis voluptatem aliquid molestias sit.
                Quidem fuga ad omnis aliquid eius voluptate deserunt dolore quos at, illo itaque esse dolorum quam maxime sed nesciunt autem officia corrupti dicta numquam magni, delectus veritatis. Culpa, iste quo?
                Hic natus qui commodi, eveniet quaerat magnam odio nam, molestiae repellendus earum aliquid sit repudiandae optio tempore. Vel quibusdam, perspiciatis, quos ullam enim impedit minima ex repellendus suscipit doloribus magnam!
                Recusandae quia voluptatibus vitae amet corrupti minus quisquam, nulla totam iste voluptas ullam alias autem doloribus. Eos reprehenderit distinctio, accusantium, sint quae repellendus atque suscipit, eligendi eveniet delectus laudantium vero?
                Odio aut dolor cum totam quibusdam placeat debitis voluptatibus officia porro quaerat iusto odit architecto provident modi, possimus natus quidem ab culpa necessitatibus amet commodi itaque doloremque quasi? Aut, architecto?
                Itaque ullam sit eligendi ipsa, dolores voluptatem magnam ab rem. Illum error, tempore est, corrupti beatae dolorum obcaecati animi harum nisi unde expedita iure vero nihil, hic officia aut corporis.
                Ex optio soluta unde! Harum ullam magnam inventore fugit, suscipit aspernatur voluptates, quaerat molestias tenetur minus nemo asperiores vero in ipsam maiores. Iure, reprehenderit necessitatibus corporis officiis quo ullam ducimus!
                Obcaecati necessitatibus totam perferendis dicta officia, excepturi omnis voluptatum hic tempora earum eius animi nesciunt pariatur sunt assumenda consectetur eligendi dolore error laborum nostrum vero! Saepe ipsam voluptatibus minima doloremque.
                Iusto, soluta corporis vel commodi provident molestias minus atque quae officiis error maiores, a impedit sunt dignissimos ut aperiam harum aliquam ab assumenda, quia velit numquam. Nulla optio numquam voluptas.
                Dolorem omnis repellat ea ullam consectetur sint earum odit aliquid expedita ipsum sapiente perferendis velit corrupti harum quis cum, ipsa officiis voluptate natus nemo nam! Possimus odit fugiat delectus vero.
                Suscipit debitis numquam molestiae neque ratione sint nemo harum quam facere quos ipsa quidem porro ea asperiores assumenda a, pariatur eligendi autem sapiente corporis velit? Repellendus ad amet facilis voluptatem.
                Voluptatem hic est dolores ad, quibusdam ullam sint corporis quas ab error labore nulla, doloribus inventore assumenda aliquam autem enim rerum repudiandae tempore harum dignissimos? Sapiente magni vitae debitis totam?
                Dignissimos sunt tenetur harum consequuntur. Natus repellendus rem, asperiores tenetur suscipit officiis nostrum, itaque, odit ipsam laborum iste accusantium! Alias ea at quasi vitae vel, eos ipsum? Ducimus, voluptas ex?
                Ut incidunt harum id, molestias officia et amet molestiae qui quisquam ipsam illum atque excepturi dicta reprehenderit deleniti mollitia, vitae consequatur, obcaecati distinctio deserunt impedit fugit quis quas. Expedita, tempora?
            </div>

            <div className="bg-teal-300">
                Item 2
            </div>

            <div className="bg-orange-300">
                Item 3
            </div>

            <div className="bg-yellow-300">
                Item 4
            </div>
        </div>
    )
}

/* 

    by-default the grid ( utility ), container make only 1 column, the rows are automatically build up based on the number of children. we call this grid as "implicit grid". the size of each row depends on the children size. and the height of the grid = height of their children

    if we make a grid of fixed, in that case the rows height will be eqaully divided into the children.

    creating columns and rows using fr is more flexible because 1. it gives column and rows a minimun width so that it content does not overflow, 2. it adjust according to the gap between the items. 3. the columns are equal spaced

    "grid-template-columns" are used to define the number of columns present inside the grid with their size that can be either defined using px, percentage, vw, rem and fr ( use this very flexible )

    "grid-template-rows" are used to define the rows present inside the grid-container with their size

    "grid-rows" and "grid-columns" -> these properties are used to span the grid items based on the row lines and column lines using grid-row: start-of-the-row-line / end-of-the-row-line

    "grid-template-area": 

    by-default the "grid-items" streatch out the row

    ALIGNMENT PROPERTIES
    1. Justify-content (default value is start ) -> used to align "columns" present inside the grid-container as a whole (start, end, center, space-between, space-evenly, space-around) works only when the all the columns length < grid-container length

    4. Align-content -> used to align the grid-items across the row / vertical ( just like Justify-content )

    2. Justify-items ( default value is streatch ) -> used to align the grid-items inside their column along the column ( start, end, stretch, center )

    5. Align-items (default value is stretch) -> used to align the grid-items inside their row (start, end, center, stretch)


    3. Justify-self ( default value is stretch ) -> use for individaul grid-child to align inside their column across columns

    // explicit grid means we have defiend both rows and columns together

    minmax -> provides grid-columns and rows a min value and the max value. the element will move towards the max value if the content inside it overflows,
*/



