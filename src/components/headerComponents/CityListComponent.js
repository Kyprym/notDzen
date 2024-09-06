import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCityActions } from "../../store/actions/cityListActions"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

function CityListComponent() {
    const { hideCityList } = useCityActions()
    return <div id="cityListBoxShaow" onClick={(e) => {
        if (e.target.id === "cityListBoxShaow") {
            hideCityList()
        }

    }}>
        <div>

            <div id="cityListComponent">
                <div>
                    <div id="ctyListText">
                        Укажите ваш город — и мы покажем актуальные новости и погоду
                    </div>
                    <FontAwesomeIcon icon={faCircleXmark} id="faXmark" className="allLinks" onClick={hideCityList} />
                </div>
                <div className="allLinks"
                    id="cityListUpButton">
                    Определить автоматически
                </div>
                <div
                    className="allLinks"
                    id="cityListBottomButton"
                >
                    Указать вручную
                </div>
            </div>
        </div>
    </div>
}
export default CityListComponent