const fa_sun = document.querySelector('.fa-sun')
const fa_moon = document.querySelector('.fa-moon')
const root = document.querySelector('#root')
const closeVideo = document.querySelector('#close_video')
const video_current = document.getElementsByTagName('iframe')
console.log(video_current[0])

fa_sun.onclick = function () {
    root.classList.add('light')
    const rootLight = document.querySelector('#root.light')
    if (rootLight) {
        const formInline = document.querySelector('.form-inline')
        fa_sun.style.display = 'none'
        fa_moon.style.display = 'block'
    }

}
fa_moon.onclick = function () {
    root.classList.remove('light')
    fa_sun.style.display = 'block'
    fa_moon.style.display = 'none'
}

$('.counter').countUp({
    'time': 4000,
    'delay': 10
});

closeVideo.onclick = function () {
    // video_current.pause()
    console.log(234235)
}

const closeVideo_end = document.querySelector('#end .close__btn i')
var id_end = document.getElementById("end");
closeVideo_end.onclick = function () {
    id_end.style.display = 'none'
}

// window.onscroll = function () {
//     console.log(document.body.offsetHeight)
//     window.scrollY +window.innerHeight < document.body.offsetHeight ? id_end.classList.add('p-fixed') :
//         id_end.classList.remove('p-fixed')
// }
const chieudaibody = document.body.offsetHeight
window.onscroll = function (ev) {
    console.log("0. scroll Y: " + window.scrollY);
    console.log("1. scroll height: " + document.body.scrollHeight);
    console.log("2. offset height: " + document.body.offsetHeight);
    console.log("3. client height: " + document.documentElement.clientHeight);
    console.log("4. element height: " + document.documentElement.scrollHeight);
    console.log("5. element offsetheight: " + document.documentElement.offsetHeight);;
    if (window.scrollY+608>(document.body.offsetHeight - 400 )) {
        id_end.classList.remove("p-fixed");
    } else if(window.scrollY+608<(document.body.offsetHeight - 400 )) {
        id_end.classList.add("p-fixed");
    };
}
// window.onscroll = function(){
// console.log("1. scroll height: "+document.body.scrollHeight);
// console.log("2. offset height: "+document.body.offsetHeight);
// console.log("3. client height: "+document.documentElement.clientHeight);
// console.log("4. element height: "+document.documentElement.scrollHeight);
//     console.log("5. element offsetheight: "+document.documentElement.offsetHeight);
// }
