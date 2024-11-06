document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#nameProfile');
    const usernameElement = document.querySelector('#userName');
    const avatarElement = document.querySelector('#avatar_img');
    const reposElement = document.querySelector('#repos');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');


    fetch('https://api.github.com/users/Kauandev012')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.innerText = json.avatar_url;
        seguindoElement.innerText = json.following;
        seguidoresElement.innerText = json.followers;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
})