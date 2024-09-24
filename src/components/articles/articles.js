import { AaricleComponent } from "./articleComponent";
import { ArticlesHeader } from "./articlesHeader";
import { nanoid } from "nanoid";
import { useMoreInfAction } from "../../store/actions/moreInfAction";


import innovationIcon from "../../img/articlesImg/innovationIcon.jpg"
import innovationIMG from "../../img/articlesImg/innovationIMG.jpg"
import carIcon from "../../img/articlesImg/carIcon.jpg"
import carIMG from "../../img/articlesImg/carIMG.jpg"
import scienceIcon from "../../img/articlesImg/scienceIcon.jpg"
import scieceIMG from "../../img/articlesImg/scienceIMG.jpg"
import musicIcon from "../../img/articlesImg/musicIcon.jpg"
import musicIMG from "../../img/articlesImg/musicIMG.jpg"
import politicIcon from "../../img/articlesImg/politicIcon.jpg"
import politicIMG from "../../img/articlesImg/politicIMG.jpg"
import desingIcon from "../../img/articlesImg/designIcon.jpg"
import desingIMG from "../../img/articlesImg/designIMG.jpg"
import sugrIcon from "../../img/articlesImg/sugrIcon.jpg"
import sugrIMG from "../../img/articlesImg/sugrIMG.jpg"
import powerIcon from "../../img/articlesImg/powerIcon.jpg"
import powerIMG from "../../img/articlesImg/powerIMG.jpg"

import { carChannelName, carHeaderText, carText, designChannelName, designHeaderText, designText, innovationChannelName, innovationHeaderText, innovationText, musicChannelName, musicHeaderText, musicText, politicChannelName, politicHeaderText, politicText, powerChannelName, powerText, scinceChannelName, scinceHeaderText, scinceText, sugrChannelName, sugrHeaderText, sugrText } from "../../modules/articlesStore";



export function Articles() {
    const { hideMoreInfWindow } = useMoreInfAction()

    return <div
        onClick={hideMoreInfWindow}
        id="ArticlesComplateComponent"
        className="themeComponentHeader">
        <ArticlesHeader />
        <div id="articlesContentBlock">
            <AaricleComponent
                channelIcon={innovationIcon}
                channelName={innovationChannelName}
                headerText={innovationHeaderText}
                articleText={innovationText}
                img={innovationIMG}
                num={nanoid()}
            />
            <AaricleComponent
                channelIcon={carIcon}
                channelName={carChannelName}
                headerText={carHeaderText}
                articleText={carText}
                img={carIMG}
                num={nanoid()}
            />

            <AaricleComponent
                channelIcon={scienceIcon}
                channelName={scinceChannelName}
                headerText={scinceHeaderText}
                articleText={scinceText}
                img={scieceIMG}
                num={nanoid()}
            />
            <AaricleComponent
                channelIcon={sugrIcon}
                channelName={sugrChannelName}
                headerText={sugrHeaderText}
                articleText={sugrText}
                img={sugrIMG}
                num={nanoid()}
            />
            <AaricleComponent
                channelIcon={musicIcon}
                channelName={musicChannelName}
                headerText={musicHeaderText}
                articleText={musicText}
                img={musicIMG}
                num={nanoid()}
            />

            <AaricleComponent
                channelIcon={politicIcon}
                channelName={politicChannelName}
                headerText={politicHeaderText}
                articleText={politicText}
                img={politicIMG}
                num={nanoid()}
            />

            <AaricleComponent
                channelIcon={desingIcon}
                channelName={designChannelName}
                headerText={designHeaderText}
                articleText={designText}
                img={desingIMG}
                num={nanoid()}
            />

            <AaricleComponent
                channelIcon={powerIcon}
                channelName={powerChannelName}
                headerText={powerText}
                articleText={powerText}
                img={powerIMG}
                num={nanoid()}
            />
        </div>

    </div>
}