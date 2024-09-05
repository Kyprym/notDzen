function closeSearchHistoryFrame() {
    document.getElementById('shadowWindow').addEventListener('click', (e) => {
        if (e.target.id === "shadowWindow") {
            document.getElementById('shadowWindow').style.display = "none"
            e.stopPropagation()
        }
    })
}

export default closeSearchHistoryFrame