
import { useState } from "react"
import NewsListComponent from "./NewsListComponent"
import { nanoid } from "nanoid"


const newsListArrFiveElem = [
    "Правительство выделило средства на развитие сельских территорий",
    "Новый законопроект о защите животных вызвал жаркие споры в обществ",
    "В мире отмечают Международный день толерантности, призывая к уважению и пониманию",
    "В регионе построят новый спортивный комплекс",
    "Компания выпустила инновационный продукт",]
const newsListArrTenElem = [
    "В стране повысят МРОТ",
    "Выдающийся учёный получил Нобелевскую премию",
    "В мире отмечают Международный день толерантности",
    "Новая технология поможет диагностировать заболевания на ранней стадии",
    "В городе пройдёт фестиваль искусств",
    "Учёные создали новый материал для аккумуляторов"]

const newsListArrFiveTenElem = [
    "В России появится новый вид туризма",
    "Учёные открыли новый способ борьбы с депрессией",
    "На Марсе обнаружили следы воды",
    "Новый законопроект о защите животных вызвал споры в обществе",
    "В стране отмечают День народного единства"
]



const newsListLinks = ["index0.html", "index1.html", "index2.html", "index3.html", "index4.html", "index5.html",
    "index6.html", "index7.html", "index0.html", "index1.html", "index2.html", "index3.html",
    "index4.html", "index5.html", "index6.html", "index7.html",
]

function NewsList() {
    const [newsState, setFiveNewsState] = useState(newsListArrFiveElem)
    const [clickFiveNewsState, setClickFiveNewsState] = useState(true)
    const [restNewsState, setRestNewsState] = useState(false)


    const newsListShow = newsState.map((news, i) => {
        return <NewsListComponent key={nanoid()} text={news} link={newsListLinks[i]} />
    })
    return <div id="newsList">
        {newsListShow}
        <>{clickFiveNewsState ? <p className="fiveNewsState transitionTime"
            onClick={() => {

                setFiveNewsState(newsState.concat(newsListArrTenElem))
                setClickFiveNewsState(false)

            }}>Еще 5 новостей</p>
            :
            <p
                onClick={() => {
                    setFiveNewsState(newsState.concat(newsListArrFiveTenElem))
                    setRestNewsState(true)
                }}
                className="fiveNewsState transitionTime">
                {restNewsState ? <a href="news.html">Показать все новости</a> : <p>Еще 5 новостей</p>}
            </p>}</>
    </div>
}
export default NewsList


