console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "gvgf-Salam-e-Ishq", filePath: "songs/chini.mp3", coverPath: "covers/1.jpg"},
    {songName: "wrf-Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/2.jpg"},
    {songName: "fveavv-Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/3.jpg"},
    {songName: "fecef-Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/4.jpg"},
    {songName: "ghgcm-Salam-e-Ishq", filePath: "songs/jaadugar.mp3", coverPath: "covers/5.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 4) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Login Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    // If login button exists on the main page
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            let modal = document.getElementById("loginModal");
            modal.style.display = "block";
        });
    }

    // Close modal functionality
    let span = document.getElementsByClassName("close")[0];
    if (span) {
        span.onclick = function() {
            let modal = document.getElementById("loginModal");
            modal.style.display = "none";
        }
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission (for demo)

            // Retrieve username and password values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // For demonstration, log the values
            console.log('Username:', username);
            console.log('Password:', password);

            // You can add further logic here (e.g., authentication)
            // For demo purposes, we'll just hide the modal
            let modal = document.getElementById("loginModal");
            modal.style.display = "none";
        });
    }
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
    let query = e.target.value.toLowerCase();
    songItems.forEach(item => {
        let songName = item.getElementsByClassName('songName')[0].innerText.toLowerCase();
        if (songName.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
