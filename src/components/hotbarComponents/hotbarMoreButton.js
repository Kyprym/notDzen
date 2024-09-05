export function HotbarMoreButton({ arr }) {
    return <div id="hotbarMoreButton">
        {arr.map((elem => {
            return <a href={elem.link} className="hotbarMoreButtonLinks">
                {elem.text}
            </a>
        }))}
    </div>
}