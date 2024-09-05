import { useContext } from "react"
import { GlobalContextStore } from "../globalContextStore"
import { cityList } from "../../modules/getGlobalInfo"
import ElemCityListComponent from "./elemCityListComponent"
import { nanoid } from "nanoid"

function CityListComponent() {
    const [state, setState] = useContext(GlobalContextStore)

    function closeCityListWindow() {
        setState(false)
    }


    return <>
        {state ?
            <div id="windowShadowCityList" onClick={() => {
                setState(false)
            }}>
                <div id="cityListComponent"
                    className="allLinks"
                    onClick={() => {
                        setState(false)
                    }}
                >
                    <p>Выберите город</p>
                    <hr />
                    {cityList.map((city) => {
                        return <ElemCityListComponent
                            city={city.ru}
                            key={nanoid()}
                            closeWindow={closeCityListWindow}
                        />
                    })}
                </div>
            </div> : ""
        }
    </>
}

export default CityListComponent