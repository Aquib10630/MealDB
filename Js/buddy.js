const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    const buddy = data.results;
    const buddyContainer = document.getElementById('buddies');
    for (const friend of buddy) {
        const p = document.createElement('p');
        p.innerText = `Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}
            Email: ${friend.email}
        `
        buddyContainer.appendChild(p);
    }

}