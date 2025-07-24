export default function First() {

    return (
        <div className="w-min">
            <div className="bg-orange-400 w-min">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod saepe rerum magni est optio delectus, perspiciatis odio, id at voluptate cumque, beatae quidem error? Eligendi beatae doloremque necessitatibus aliquid.
            </div>

            <div className="bg-amber-400 w-max">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque officiis ab non aut minus neque nulla dolore, doloribus beatae similique adipisci enim dolores? Culpa quam a magni quo in?
            </div>

            <div className="bg-purple-400 flex flex-row gap-x-2 w-min sm:w-1/3">
                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur eos aliquam suscipit assumenda laudantium illum voluptas maxime tempore. Eos velit aspernatur dolorem fugit recusandae magnam quos ipsum sequi adipisci?
                </div>

                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus odio dolor temporibus voluptas, ratione, consequatur unde pariatur perspiciatis assumenda possimus error eligendi excepturi soluta blanditiis fugit id, quaerat voluptatibus. Architecto.
                </div>
            </div>
        </div>
    )
}

// w-min -> sets the size ( "width" ) of the element as the size ( "width" ) of the larget content without overflowing it.
// w-max -> sets the size ( "width" ) of the elemets as the size without overflowing the content present inside it.