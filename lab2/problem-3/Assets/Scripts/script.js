function searchUser() {
    const userName = document.getElementById('usernameSearch').value;
    fetch('https://api.github.com/users/' + userName)
    .then(response => response.json())
    .then(data => {
        setUserProfile(data);
        getAllRepos(data);
    })
    .catch(error => console.error(error))
}

function setUserProfile(data) {
    document.getElementById('name').innerHTML = data.name ? data.name : 'No name';
    document.getElementById('img').src = data.avatar_url ? data.avatar_url : 'https://connectkaro.org/wp-content/uploads/2019/03/placeholder-profile-male-500x500.png';
    document.getElementById('username').innerHTML = data.login ? data.login : 'No username';
    document.getElementById('email').innerHTML = data.email ? data.email : 'No email';
    document.getElementById('location').innerHTML = data.location ? data.location : 'No location';
    document.getElementById('gists').innerHTML = data.public_gists ? data.public_gists : 'No gists';
}

function getAllRepos(data) {
	console.log(data);
	// https://api.github.com/users/USERNAME/repos
	fetch('https://api.github.com/users/' + data.login + '/' + 'repos')
	.then(response => response.json())
	.then(data => {
		setUserRepos(data);
	})
	.catch(error => console.error(error))
}

function setUserRepos(data) {
	// loop through all repos
	// create new div for each repo and
	// attach class
	const parent = document.getElementById('repoList');
	while (parent.firstChild) {
		parent.removeChild(parent.lastChild);
	}

	data.forEach(repo => {
		// new div created
		let el = document.createElement('div');
		el.style.fontWeight = "400";
		el.classList.add('repocell');

		// add name and description to new div
		let span = document.createElement('span');
		let name = document.createTextNode("Name: " + repo.name);
		let br = document.createElement("br")
		let description = document.createTextNode("Description: " + repo.description);
		span.appendChild(name)
		span.appendChild(br);
		span.appendChild(description);
		el.appendChild(span)


		parent.appendChild(el);
	});
}