const randomUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
const displayUsers = users => {
    const randomUsers = document.getElementById('random-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
    <h3>Name:${user.name.title} ${user.name.first} ${user.name.last} </h3>
    <p>Location:${user.location.city} ${user.location.state}${user.location.country}</p>
    <p>Email:${user.email} </p>

    
    `;
        randomUsers.appendChild(userDiv)
    }

}



randomUsers();