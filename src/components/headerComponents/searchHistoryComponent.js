import { nanoid } from "nanoid";
import ElemSearchHistoryComponent from "./elemSearchHistoryCompoonent"
import { searchHistoryArr } from "../../modules/getGlobalInfo";

function SearchHistoryComponent({ closePannel }) {

    return <div id="shadowWindow" onClick={closePannel}>
        <div id="searchHistoryComponent">
            <div>
                {
                    searchHistoryArr.map(elem => {
                        return <ElemSearchHistoryComponent
                            key={nanoid()}
                            text={elem.text}
                            link={elem.link} />
                    })
                }
            </div>
        </div>
    </div>
}
export default SearchHistoryComponent