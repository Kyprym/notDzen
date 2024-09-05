export function HotbarButtomElement({ text, link }) {
    return <div className="hotbarButtomElement ">
        <a href={link}>
            {text}
        </a>
    </div>
}