


const userLoad = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data))

}

const displayData = (user) => {
    const showData = document.getElementById('display-random-user');
    showData.innerHTML = user.results[0].gender;
console.log(user.results[0].gender)
}

userLoad();