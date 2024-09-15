import { nanoid } from "nanoid"
import { NewsRuletteElemComponent } from "./newsRuletteElemComponent"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const newsThemeArr = [
    {
        text: "Главное",
        link: ""
    },
    {
        text: "ГОРОД", //// нужна функция, подтягивания города
        link: ""
    },
    {
        text: "Интересное",
        link: ""
    },
    {
        text: "СВО",
        link: ""
    },
    {
        text: "Шоу-бизнес",
        link: ""
    },
    {
        text: "Происшествия",
        link: ""
    },
    {
        text: "Авто",
        link: ""
    },
    {
        text: "Политика",
        link: ""
    },
    {
        text: "Общество",
        link: ""
    },
    {
        text: "Эконмика",
        link: ""
    },
    {
        text: "В мире",
        link: ""
    },
    {
        text: "Культура",
        link: ""
    },
    {
        text: "Технологии",
        link: ""
    },
    {
        text: "Наука",
        link: ""
    },
]

export const NewsRuletteComponent = () => {
    const [swipeState, setSwipeState] = useState(0)

    const swipeLeft = () => {
        setSwipeState(swipeState + 4)
    }

    const swipeRight = () => {
        setSwipeState(swipeState - 4)

    }



    return <div id="newsRuletteComponent"
        onClick={swipeRight}
    >

        <FontAwesomeIcon
            icon={faChevronLeft}
            className="faChevron allLinks"
            onClick={swipeLeft}
        />

        <div id="newsRulletButtons"
            style={{ transform: `translateX(${swipeState}em)` }}
        >
            {newsThemeArr.map(elem => {
                return <NewsRuletteElemComponent
                    text={elem.text}
                    link={elem.link}
                    key={nanoid(11)}
                />
            })}
        </div>

        <FontAwesomeIcon
            icon={faChevronRight}
            className="faChevron allLinks"
            onClick={swipeLeft}
        />

    </div>
}