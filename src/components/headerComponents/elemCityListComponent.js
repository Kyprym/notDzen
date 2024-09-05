import { applyCity } from "../../modules/getGlobalInfo"

export default function ElemCityListComponent({ city, closeWindow }) {

    return <div className="elemCityListComponent allLinks"
        onClick={(e) => {
            applyCity(e)
            closeWindow()
        }}
    >
        {city}
    </div>
}