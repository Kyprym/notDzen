import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollar, faDownload, faDroplet, faEuro, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { getTime, getTemp, getMoney, getGas, city } from "../../modules/getGlobalInfo"
import { useEffect } from "react"
import { useCityActions } from "../../store/actions/cityListActions"



const moon = <FontAwesomeIcon icon={faMoon} />
const sun = <FontAwesomeIcon icon={faSun} />

let time = getTime()





function GlobalInformation({ textDownBrow }) {

    useEffect(() => {
        getTemp(city)
        getMoney()
        getGas()
    }, [])

    const { showCityList } = useCityActions();

    return <>
        <div id="globalInformation">
            <div>
                <a href="https://yandex.ru/pogoda" id="moon_sun" className="allLinks">
                    {(time > 8 && time < 20) ? sun : moon}
                    <span id="temp"></span>
                </a>
                <span id="city"
                    className="allLinks"
                    onClick={showCityList}
                >
                    {city}
                </span>
            </div>

            <div id="rightGlobalInf">
                <a id="money" href="https://yandex.ru/yandexapp/ru/voiceassistant/exchange-rates/" >
                    <div className="allLinks"><FontAwesomeIcon icon={faDollar} /><span id="USD"></span></div>
                    <div className="allLinks"> <FontAwesomeIcon icon={faEuro} /><span id="EUR"></span></div>
                </a>
                <a className="allLinks" href="https://dzen.ru/news/rubric/quotes/2">
                    <FontAwesomeIcon icon={faDroplet} /> <span id="gas"></span>
                </a>
                <div id="donloadYABrowser">
                    <a href="https://browser.yandex.ru/?utm_medium=link&utm_sour
                        ce=dzen&banerid=0458004940&yclid=3066302405426282495">
                        <FontAwesomeIcon icon={faDownload} className="allLinks" />{textDownBrow}
                    </a>
                </div>
            </div>
        </div >
    </>
}
export default GlobalInformation