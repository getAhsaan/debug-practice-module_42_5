let clicks = 0;
const count = () => {
    const countElement = document.getElementById("count")
    countElement.innerText = ++clicks;
    saveStoredCount(countElement)
    showStoredCount(countElement.innerText);
}

const getStoredCount = () => {
    let count = {};
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
        count = JSON.parse(storedCount);
    }
    return count;
}

const saveStoredCount = (countElement) => {
    localStorage.setItem('count', countElement.innerText)
}

const showStoredCount = () => {
    const storedCount = getStoredCount();
    // console.log(storedCount);
}