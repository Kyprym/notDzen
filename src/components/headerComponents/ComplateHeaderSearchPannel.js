import GlobalInformation from "./globalInformation";
import HeadSearchPannel from "./headSearchPannel";
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import SearchHistoryComponent from "./searchHistoryComponent";
import { useState } from "react";

function ComplateHeaderSearchPannel() {
    const [showSearch, setShowSearch] = useState(false);
    function closeShawdowWindow(e) {
        if (e.target.id === "shadowWindow") {
            setShowSearch(false)
        }
    }

    return <div>
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
                <div className="allLinks">Реклама</div >
                <div className="allLinks">Реклама_1</div>
            </div>
        </div>
    </div>
}
export default ComplateHeaderSearchPannel