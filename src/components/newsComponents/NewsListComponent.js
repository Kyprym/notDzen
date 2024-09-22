function NewsListComponent({ text, link }) {
    return <p className="newsListComponent allLinks">
        <a href={link}>{text}</a>
    </p>
}
export default NewsListComponent