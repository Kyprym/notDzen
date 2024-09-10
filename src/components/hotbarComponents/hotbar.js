import { faBook, faChevronDown, faChildren, faCompass, faFileVideo, faGamepad, faHome, faNewspaper, faSave, faSquareCheck, faVideoCamera } from "@fortawesome/free-solid-svg-icons"
import { HotbarComponent } from "./hotbarComponent"
import { nanoid } from "nanoid"
import { HotbarButtomElement } from "./hotbarButtomElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MoreLinksComponent from "./moreLinksComponent"
import { useMoreInfAction } from "../../store/actions/moreInfAction"
import { useSelector } from "react-redux"

function Hotbar() {
    const { showMoreInfWindow } = useMoreInfAction()
    const hotbarElemetsUp = [
        { text: "Главная", link: "https://dzen.ru/", icon: faHome },
        { text: "Подписки", link: "https://dzen.ru/subscriptions-manager", icon: faSquareCheck },
        { text: "Темы", link: "https://dzen.ru/", icon: faCompass },
        { text: "Видео", link: "https://dzen.ru/", icon: faVideoCamera },
        { text: "Статьи", link: "https://dzen.ru/", icon: faBook },
        { text: "Ролилики", link: "https://dzen.ru/", icon: faFileVideo },
        { text: "Новости", link: "https://dzen.ru/", icon: faNewspaper },
        { text: "Сохраненное", link: "https://dzen.ru/", icon: faSave },
    ]
    const hotbarElemetsDown = [
        { text: "Детям", link: "https://dzen.ru/", icon: faChildren },
        { text: "Видеоигры", link: "https://dzen.ru/subscriptions-manager", icon: faGamepad },
    ]
    const suppInf = [
        { text: "Всё о Дзене", link: "https://dzen.ru/" },
        { text: "Вакансии", link: "https://dzen.ru/subscriptions-manager" }
    ]

    const moreInfState = useSelector(state => state.moreInfState)

    return <div id="hotbar">
        {hotbarElemetsUp.map((elem) => {
            return <HotbarComponent
                text={elem.text}
                link={elem.link}
                icon={elem.icon}
                key={nanoid()}
            />
        })}
        <hr />
        {hotbarElemetsDown.map((elem) => {
            return <HotbarComponent
                text={elem.text}
                link={elem.link}
                icon={elem.icon}
                key={nanoid()}
            />
        })}
        <hr />
        {
            suppInf.map((elem) => {
                return <HotbarButtomElement
                    text={elem.text}
                    link={elem.link}
                    key={nanoid()}
                />
            })
        }
        <div className="hotbarButtomElement">
            <a href={'/dzen/ссылка на приложение'}>
                <div>Дзен на <span>iOS и Android</span></div>
            </a>
        </div>
        <div className="hotbarButtomElement">
            <span
                onClick={() => {
                    showMoreInfWindow()
                }}
            >Ещё <FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
        {moreInfState ? <MoreLinksComponent /> : ""}
    </div>
}

export default Hotbar