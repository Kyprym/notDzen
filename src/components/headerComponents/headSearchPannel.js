import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { GlobalContextStore } from "../globalContextStore"


const keyBoardTutorial = "https://support.microsoft.com/ru-ru/windows/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D1%8B-18b2efc1-9e32-ba5a-0896-676f9f3b994f"

function HeadSearchPannel({ searchButton, icon, inpPlaceholder, inpClickFunc }) {
    const [cityWindowState, setCityWindowState] = useContext(GlobalContextStore)
    return <>
        <div id="headSearchPannel">
            <div id="searchInpBlock" className="searchBlockSetting">
                <input id="searchInpBlockInput"
                    placeholder={inpPlaceholder}
                    onClick={() => {
                        setCityWindowState(false)
                        inpClickFunc()
                    }}
                />

                <div className="searchBlockSetting">
                    <a href={keyBoardTutorial} id="faKeyboard">
                        <FontAwesomeIcon icon={icon} className="allLinks" />
                    </a>
                    <div id="searchButton" className="allLinks">
                        {searchButton}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default HeadSearchPannel