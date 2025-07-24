export default function InputContainer() {
    return (
        <div className="h-screen w-screen flex items-center overflow-hidden justify-center border-box">

            <div className="flex bg-custom-black border p-2 gap-x-4 gap-y-4 flex-wrap rounded-lg">

                <div className="flex  sm-381:items-start items-stretch flex-col gap-y-2 grow">
                    <label className="text-white font-medium" htmlFor="full-name">Name:</label>
                    <input className="placeholder-custom-white text-white border-b p-1 border-custom-white focus:border focus:border-red-400 outline-0" type="text" id="full-name" placeholder="Enter your name..." />
                </div>

                <div className="flex flex-col gap-y-2 grow">
                    <label className="text-custom-white grow- font-medium" htmlFor="email">Email:</label>
                    <input className=" placeholder-custom-white grow-0 border-b outline-0 border-b-custom-white p-1 focus:border focus:border-b-red-400" type="text" id="email" placeholder="Enter your email..." />
                </div>

                <button className="self-end bg-custom-white text-custom-black px-4 py-2 font-medium rounded-md sm-391:grow-1 grow">Submit</button>

            </div>

        </div>
    )
}