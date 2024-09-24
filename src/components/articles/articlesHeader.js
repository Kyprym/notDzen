import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ArticlesHeader = () => {
    return <div
        id="articlesHeader"
        className="allLinks themeComponentHeader">
        <a href="articles.html" className="logo"> <FontAwesomeIcon icon={faBook} /> Статьи</a>

    </div>
}