
import { applyCity, cityList, getTemp } from "../../modules/getGlobalInfo"
import { useCityActions } from "../../store/actions/cityListActions"


function CityListArr() {
    const { hideCityList } = useCityActions()
    return <div id="cityListSpace">
        <div
            id="cityListSpaceHeader"
        >Выберите город</div>
        {
            cityList.map((city) => {
                return <div className="cityListElem allLinks"
                    key={city.en}
                    onClick={(e) => {
                        getTemp(city.en)
                        applyCity(e)
                        hideCityList()

                    }}
                >
                    {city.ru}
                </div>
            })
        }
    </div>
}

export default CityListArr