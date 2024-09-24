import { faCompass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import themeImg from "../../img/themeImg.jpg"
import { useMoreInfAction } from "../../store/actions/moreInfAction"

export function Theme() {
    const { hideMoreInfWindow } = useMoreInfAction()

    return <div
        onClick={hideMoreInfWindow}
        className="allLinks"
        id="themeOnDzen">
        <div className="themeComponentHeader">
            <a href="theme.html">
                <div className="logo">
                    <FontAwesomeIcon icon={faCompass} />
                    Темы в Дзене
                </div>
            </a>
            <a className="allLinkls moreContentButton" href="theme.html">Ещё</a>
        </div>
        <div className='dividingLine'></div>

        <div id="themePicture" className=" allLinks">
            <picture>
                <img id="imgThemeOnDzen" src={themeImg} alt="theme" />
                <div id="textInThemeAnimation">
                    Темы
                </div>
                <div id="themeDownText">
                    <div>Популярный контент</div>
                    <div>На любой вкус</div>
                </div>
            </picture>

        </div>



    </div>

}
