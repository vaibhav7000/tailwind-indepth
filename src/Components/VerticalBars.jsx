export default function VerticalBars() {
    const values = [{
        value: "h-1/2",
        color: "bg-green-400"
    }, {
        value: "h-1/3",
        color: "bg-orange-400"
    }, {
        value: "h-1/4",
        color: "bg-blue-400"
    }, {
        value: "h-1/10",
        color: "bg-zinc-400"
    }]

    return (
        <div className="h-screen w-screen justify-start flex flex-row items-end">
            {values.map((c, idx) => <div key={idx} className={`${c.value} ${c["color"]}`} >{c["value"]}</div> )}
        </div>
    )
}

// grow (utlily) works when the elements have taken their intial size, then after taking the space if their is extra space available then the element with higher grow value will grow the most ( but only after taking the intial size )

// shrink (utility) works intially if their is less space available by the container the element with the highest shrink value will shrink the most, ( the shrinking will work if the parent has not enable wrapping (flex-nowrap), if shrinking is enable the element will not shrink up because the parent allows wrapping )