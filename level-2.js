
let count = 0;
const addClick = () => {
    document.getElementById('count').innerText = ++count;
    saveCountToLS(count);
    displayCountFromLS();
}

const getCountFromLS = () => {
    let count = {};
    const countStored = localStorage.getItem('count');
    if (countStored) {
        count = JSON.parse(countStored);
    }
    return count;
}

const saveCountToLS = count => {
    const counts = getCountFromLS();
    counts['count'] = count;
    const sendCountToLS = JSON.stringify(counts);
    localStorage.setItem('count', sendCountToLS)
}

const displayCountFromLS = () => {
const storedCount = getCountFromLS();
for(const countName in storedCount) {
    const countNumber = storedCount[countName]
    document.getElementById('count').innerText = countNumber;
}
}
displayCountFromLS();