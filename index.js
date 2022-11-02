const share = document.getElementById('share');
const socials = document.getElementById('socials');
const shareSoc = document.getElementById('share-soc');

share.addEventListener('click', showSocial);
shareSoc.addEventListener('click', showSocialMob);

function showSocial() {
    socials.style.display = 'flex';
}

function showSocialMob() {
    shareSoc.style.display = 'none'
    socials.style.display = 'flex';
}