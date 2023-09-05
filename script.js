function fetchUser() {
    const username = document.getElementById('username').value;
  
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(user => {
        showUserProfile(user);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro ao buscar o usuário.');
      });
  }
  
  function fetchRepositories(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        showRepositories(repos);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro ao buscar os repositórios.');
      });
  }
  
  function showUserProfile(user) {
    let profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = '';
  
    let img = document.createElement('img');
    img.src = user.avatar_url;
  
    let name = document.createElement('p');
    name.textContent = `Nome: ${user.name}`;
  
    let username = document.createElement('p');
    username.textContent = `Nome de usuário: ${user.login}`;
  
    let location = document.createElement('p');
    location.textContent = `Localização: ${user.location}`;
  
    let bio = document.createElement('p');
    bio.textContent = `Biografia: ${user.bio}`;
  
    let followers = document.createElement('p');
    followers.textContent = `Seguidores: ${user.followers}`;
  
    let following = document.createElement('p');
    following.textContent = `Seguindo: ${user.following}`;
  
    let reposLink = document.createElement('a');
    reposLink.href = `https://github.com/${user.login}?tab=repositories`;
    reposLink.textContent = 'Repositórios';
  
    let reposCount = document.createElement('p');
    reposCount.textContent = `Quantidade de repositórios: ${user.public_repos}`;
    reposCount.appendChild(reposLink);
  
    profileDiv.appendChild(img);
    profileDiv.appendChild(name);
    profileDiv.appendChild(username);
    profileDiv.appendChild(location);
    profileDiv.appendChild(bio);
    profileDiv.appendChild(followers);
    profileDiv.appendChild(following);
    profileDiv.appendChild(reposCount);
  }
  
  function showRepositories(repos) {
  
  }