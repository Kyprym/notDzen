import { faClock, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function ElemSearchHistoryComponent({ text, link }) {

    return <span className="elemSearchHistoryComponent">
        <a href={link} >
            <span className="allLinks serachElemText">
                <FontAwesomeIcon icon={faClock} />
                <span>{text}</span>
            </span>
        </a>
        <FontAwesomeIcon icon={faClose} className="allLinks faClose" />
    </span>
}
export default ElemSearchHistoryComponent