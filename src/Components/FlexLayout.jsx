export default function FlexLayout() {
    const container = [{
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum possimus sed facere hic dolorem aliquam aperiam esse ullam quo quibusdam delectus, quia nesciunt at aspernatur illum vero provident omnis!",
        color: "bg-red-400"
    }, {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum possimus sed facere hic dolorem aliquam aperiam esse ullam quo quibusdam delectus, quia nesciunt at aspernatur illum vero provident omnis!",
        color: "bg-purple-400"
    }, {
        text: "4",
        color: "bg-pink-600"
    }, {
        text: "5",
        color: "bg-zinc-400"
    }, {
        text: "5",
        color: "bg-teal-700"
    }, {
        text: "6",
        color: "bg-amber-400"
    }, {
        text: "6",
        color: "bg-orange-400"
    }, {
        text: "6",
        color: "bg-green-400"
    }, {
        text: "6",
        color: "bg-blue-400"
    }];

    const middleElement = Math.floor(container.length / 2);

    return (
        // <div className="h-screen w-screen flex flex-row items">
        //     {container.map((c, idx) => <div className={`${c.color} basis-1/12 ${middleElement === idx ? "grow-3": "grow"}`} key={idx}>{c["text"]}</div>)}
        // </div>

        // <div className="h-screen w-screen flex flex-row flex-wrap">
        //     {container.map((c, idx) => <div className={`${c["color"]} ${(idx + 1) % 3 === 0 ? "basis-full" : "basis-1/2"}`} >{c["text"]}</div>)}
        // </div>

        <div className="h-screen w-screen flex flex-col items-start xl:content-start  flex-wrap bg-lime-200">
            {container.map((c, idx) => <div key={idx} className={`line-clamp-3 aspect-square basis-1/3 ${c["color"]}`} >{c["text"]}</div>)}
        </div>
    )
}

// shrink (utitlity) works by default, the elements try to take the default space if their is less space / parent size is less / (wrap is not available ) the element with the largest shrink value will automatically shrinkup

// grow (utility) only works when their is extra space after the settlement of the all the elements with their intial size / basis if there is space-left in the parent the element with high "grow" value will grow up