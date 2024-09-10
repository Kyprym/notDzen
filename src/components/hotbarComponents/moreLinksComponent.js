import { useMoreInfAction } from "../../store/actions/moreInfAction"


const moreLinksArr = [
    {
        name: "Конфиденциальность",
        link: ""
    },
    {
        name: "Пользовательские соглашения",
        link: ""
    },
    {
        name: "Информация для СМИ",
        link: ""
    },
    {
        name: "Сейчас в СМИ: Статистика",
        link: ""
    },
    {
        name: "Обратная связь",
        link: ""
    }
]

function MoreLinksComponent() {
    const { hideMoreInfWindow } = useMoreInfAction()

    return <div id="moreLinksComponent">
        {
            moreLinksArr.map(elem => {
                return <a
                    href={elem.link}
                    key={elem.name}
                    onClick={hideMoreInfWindow}
                >
                    {elem.name}

                </a>
            })
        }
    </div>
}
export default MoreLinksComponent