import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HotbarComponent({ text, link, icon }) {
    return <a
        className="hotbarComponent allLinks"
        href={link}
    >
        <span className="iconHotbarComponent">
            <FontAwesomeIcon icon={icon} />
        </span>
        <span className="textHotbarComponent">
            {text}
        </span>
    </a>
}