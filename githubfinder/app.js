const searchInp = document.querySelector(".searchInp");
const btn=document.querySelector(".btn");
const githubprofile=document.querySelector(".profile");
const loader=document.querySelector(".textLoad");

function showLoader(){
 loader.classList.add('show');
 githubprofile.classList.add('hide');
}
function removeLoader(){
    loader.classList.remove('show');
    githubprofile.classList.remove('hide');
}



async function fetchGithub(){
    showLoader();
    const res= await fetch(`https://api.github.com/users/${searchInp.value}`);
    const data= await res.json();
    console.log(data);

    if(data){
        removeLoader();
        displayData(data);
        searchInp.value="";
    }else{
        removeLoader();
        alert("User not found");
    }
}

function displayData(data){
    const {login,avatar_url,public_repos,followers,following,name}=data;
    githubprofile.innerHTML=` 
    <img src="${data.avatar_url}" alt="profile pic">
    <p class="username">Username: ${data.login}</p>
    <p class="repos">Repos: ${data.public_repos}</p>
    <p class="followers">Followers: ${data.followers}</p>
    <p class="following">Following: ${data.following}</p>
    <p class="name">Name: ${data.name}</p>
    `
}
btn.addEventListener("click", fetchGithub);