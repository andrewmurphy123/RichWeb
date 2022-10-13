//array of images
let monkeyImages = [
    "https://images.newscientist.com/wp-content/uploads/2022/04/06095721/SEI_97255809.jpg",
    "https://www.pbs.org/wnet/nature/files/2014/10/Monkey-Main-1280x600.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/110329-science-probo-6p.jpg",
    "https://static.scientificamerican.com/sciam/cache/file/885FD6DB-C422-4BC5-A617827873CE6EB1_source.jpg",
    "https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2020/10/LR-cropped-%28press-release%29.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATeqyeiaQ3XB_OqUf-ms951BblS5vqt3AXA&usqp=CAU",
    "https://images.theconversation.com/files/71634/original/image-20150210-24691-h6a69x.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * monkeyImages.length)
    imgs[i].src = monkeyImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Monkeys are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "BANANA";
}

const divs = document.getElementsByTagName("div");

//font changes between different styles
let fonts = ["Georgia", "Courier New", "Verdana"];
for (let i = 0; i < divs.length; i++) {
    setInterval(() => {
        divs[i].style.fontFamily = fonts[Math.floor(Math.random() * 3)];
    }, 500);
}

let color = ["#eefa05"]

//change all divs background color to a shade of pink
for (let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = color[i%1];
}

//change all hyperlinks to a video
const a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++){
    a[i].href = "https://www.youtube.com/watch?v=fd72YQWAcNM";
}

//change all text on the page
const text = document.querySelectorAll('h1, h2, h3, h4, h5, td, p, caption, span');
for(let i = 0; i < text.length; i++) {
    text[i].innerText = "BANANA";
}