export const NewsRuletteElemComponent = ({ text, link }) => {
    return <div className="newsRuletteElemComponent">
        <a href={link}>{text}</a>
    </div>
}