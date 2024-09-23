import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function AaricleComponent({ channelName, channelIcon, headerText, articleText, img, key }) {
    const [subsBtnState, setSubsBtrnState] = useState(false)

    const channelNameLength = 15
    const headerTextLngth = 48
    const articleTextLength = 104
    const textCollector = (arr, length) => {
        let finalText = ""
        for (let i = 0; i < length; i++) {
            finalText += arr[i]
        }
        return finalText + "..."
    }

    const abbrAticleText = (text, TextLngth) => {
        const arrText = text.split('')
        if (arrText.length > TextLngth) {

            return textCollector(arrText, TextLngth)
        } else {
            return text
        }
    }


    return <div
        className="article"
        onMouseMove={() => { setSubsBtrnState(true) }}
        onMouseLeave={() => { setSubsBtrnState(false) }}
        key={key}>
        <div className="articleTop">
            <img className="allLinks artickleHeadImg" src={img} alt={articleText} />
        </div>
        <div className="articleBottom">

            <div className="articleButtonsMenu">
                <div className="articleChannelInfo allLinks">
                    <img className="channelIcon allLinks"
                        src={channelIcon}
                        alt={articleText}
                    />
                    <div className="articleChannelName">
                        {abbrAticleText(channelName, channelNameLength)}
                    </div>
                </div>
                {subsBtnState ? <div className="articleSubscribeButton allLinks">
                    Подписаться
                </div> : <></>}
                <FontAwesomeIcon className="faEllipsis allLinks" icon={faEllipsis} />
            </div>

            <div>
                <div className="articleHeaderText allLinks">
                    {abbrAticleText(headerText, headerTextLngth)}
                </div>
                <div className="articleText allLinks">
                    {abbrAticleText(articleText, articleTextLength)}
                </div>
            </div>

        </div>
    </div>
}