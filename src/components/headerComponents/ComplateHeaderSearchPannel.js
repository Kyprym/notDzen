import GlobalInformation from "./globalInformation";
import HeadSearchPannel from "./headSearchPannel";
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import SearchHistoryComponent from "./searchHistoryComponent";
import { useState } from "react";
import { useMoreInfAction } from "../../store/actions/moreInfAction";

import advert_1 from "../../img/advertising/advertising_1.jpg"
import advert_2 from "../../img/advertising/advertising_2.jpg"

function ComplateHeaderSearchPannel() {
    const [showSearch, setShowSearch] = useState(false);
    const { hideMoreInfWindow } = useMoreInfAction()

    function closeShawdowWindow(e) {
        if (e.target.id === "shadowWindow") {
            setShowSearch(false)
        }
    }


    return <div
        onClick={hideMoreInfWindow}
    >
        <div id="complateHeaderSearchPannel">
            {showSearch ? <SearchHistoryComponent
                closePannel={e => closeShawdowWindow(e)} /> : ''}
            <div id="HeadSearchAndGlobalInfo">
                <HeadSearchPannel
                    inpClickFunc={() => { setShowSearch(true) }}
                    searchButton={"Найти"}
                    icon={faKeyboard}
                    inpPlaceholder={"Поиск Яндекса"}
                />
                <GlobalInformation
                    textDownBrow={"Установите новый Я.Браузер"}
                />
            </div>
            <div id="advertising" >
                <div className="allLinks advertisingContainer">
                    <img src={advert_1} alt="advertising" />
                </div >
                <div className="allLinks advertisingContainer">
                    <img src={advert_2} alt="advertising" />

                </div>
            </div>
        </div>
    </div>
}
export default ComplateHeaderSearchPannel