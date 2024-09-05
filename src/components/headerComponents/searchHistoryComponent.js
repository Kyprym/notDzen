import { nanoid } from "nanoid";
import ElemSearchHistoryComponent from "./elemSearchHistoryCompoonent"



const searchHistoryArr = [
    { text: "поисковый запрос который был когда то типо вот 345235245234545", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 3453523452345", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 3445124234", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 23412452345", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот цукфукфуапвфвап", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 2312345пвуаупке", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 234523452345245", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 4", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 3", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 2", link: 'https://dzen.ru/' },
    { text: "поисковый запрос который был когда то типо вот 1", link: 'https://dzen.ru/' },
];



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