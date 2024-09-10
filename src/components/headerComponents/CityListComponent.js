import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCityActions } from "../../store/actions/cityListActions"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

import CityListArr from "./cityListArr"

function CityListComponent() {
    const { hideCityList } = useCityActions()
    const [autoCityState, setAutoCityState] = useState(false)
    const [cityListState, setCityListState] = useState(false)

    const showAutoCity = () => setAutoCityState(true)
    const showCityListArr = () => setCityListState(true)





    return <div id="cityListBoxShaow" onClick={(e) => {
        if (e.target.id === "cityListBoxShaow") {
            hideCityList()
        }

    }}>
        {
            cityListState ?
                <div id="cityListBlock">
                    <CityListArr />
                </div>
                : ""
        }
        <div>
            {!autoCityState ?
                <div className="cityListComponent">
                    <div>
                        <div className="ctyListText">
                            Укажите ваш город — и мы покажем актуальные новости и погоду
                        </div>
                        <FontAwesomeIcon icon={faCircleXmark} id="faXmark" className="allLinks" onClick={hideCityList} />
                    </div>
                    <div className="allLinks"
                        id="cityListUpButton"
                        onClick={showAutoCity}
                    >
                        Определить автоматически
                    </div>
                    <div
                        className="allLinks cityListBottomButton"
                        onClick={showCityListArr}
                    >
                        Указать вручную
                    </div>
                </div> : ""
            }

        </div>


        {autoCityState ?
            <div className="cityListComponent">
                <div className="ctyListTextAutoWindowHeader">
                    <div id="ctyListTextAutoWindow"> Выбор города</div>
                    <FontAwesomeIcon icon={faCircleXmark}
                        id="faXmark"
                        className="allLinks"
                        onClick={hideCityList} />
                </div>
                <div id="ctyListTextAutoWindowText">
                    Не можем определить ваш город —
                    нет доступа. Дайте его в настройках браузера
                    или введите название вручную.
                </div>
                <div
                    className="allLinks cityListBottomButton"
                    onClick={showCityListArr}
                >
                    Указать вручную
                </div>
            </div> : ""

        }


    </div>
}
export default CityListComponent