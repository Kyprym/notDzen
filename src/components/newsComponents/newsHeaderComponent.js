import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsHeaderComponent = () => {
    return <div className="allLinks themeComponentHeader">
        <a href="news.html" className="logo"> <FontAwesomeIcon icon={faNewspaper} /> Новости</a>
    </div>
}