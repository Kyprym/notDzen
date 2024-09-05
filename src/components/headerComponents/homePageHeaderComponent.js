import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function HomePageHeader({ homePageHeaderLogo, homePageHeaderUserProfileImg, homePageHeaderLogoText }) {
    return <div id="homePageHeader">
        <div id="homePageHeaderLogo" className="allLinks">
            <img src={homePageHeaderLogo} />
            <img src={homePageHeaderLogoText} />
        </div>

        <div>
            <div id="homePageHeaderSearch" className="allLinks">
                <FontAwesomeIcon icon={faSearch} />
            </div>

            <div id="homePageHeaderUserProfile">
                <img src={homePageHeaderUserProfileImg} className="allLinks" />
            </div>
        </div>
    </div>
}

export default HomePageHeader