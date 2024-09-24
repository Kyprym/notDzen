import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NewsList from "./newsList";
import { useState } from "react";
import { NewsHeaderComponent } from "./newsHeaderComponent";
import { nanoid } from "nanoid";
import { useMoreInfAction } from "../../store/actions/moreInfAction";



const newsArr = ["Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто", "Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто", "Авто", "Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто"]



export function News() {
    const { hideMoreInfWindow } = useMoreInfAction()

    const rightShift = -37
    const [rulleteSwypeState, setRulleteSwipeState] = useState(rightShift)
    function rulleteSwypeLeft() {
        setRulleteSwipeState(rulleteSwypeState - 10)
    }
    function rulleteSwypeRight() {
        setRulleteSwipeState(rulleteSwypeState + 10)
    }

    return <div
        id="news"
        className="allLinks"
        onClick={hideMoreInfWindow}
    >
        <div id="newsHeader">

            <NewsHeaderComponent />

            <div id="newsRulleteHeader">
                <div className="faChevron allLinks">
                    {(rulleteSwypeState > -37) ? <FontAwesomeIcon icon={faChevronLeft} onClick={rulleteSwypeLeft} /> : <></>}
                </div>
                <table id="newsRulette" className="allLinks" style={{
                    right: `${rulleteSwypeState}em`
                }}>
                    <tr>
                        <td className="newsRuletteComponent allLinks"
                            onClick={(e) => {

                            }}
                        >{newsArr[0]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[1]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[2]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[3]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[4]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[5]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[6]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[7]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[8]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[9]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[10]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[11]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[12]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[13]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[14]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[15]}</td>
                        <td key={nanoid()} className="newsRuletteComponent allLinks">{newsArr[16]}</td>
                    </tr>
                </table>
                <div className="faChevron allLinks">
                    {(rulleteSwypeState <= -7) ? <FontAwesomeIcon icon={faChevronRight} onClick={rulleteSwypeRight} /> : <></>}
                </div>
            </div>

        </div>
        <NewsList />

    </div>
}
