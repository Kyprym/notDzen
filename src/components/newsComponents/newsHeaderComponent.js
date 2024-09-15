import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsHeaderComponent = () => {
    return <div id="newsHeaderComponent" className="allLinks">
        <span id="newsLogo" className="logo"> <FontAwesomeIcon icon={faNewspaper} /> Новости</span>

    </div>
}