'use strict';
console.log('привет');

const conteiner = document.createElement('div');
conteiner.className = 'conteiner';
document.body.append(conteiner);

const banner = document.createElement('div')
banner.className = 'banner';
banner.style.height = innerHeight + 'px';

const main = document.createElement('div');
const mainMain = document.createElement('main');
main.className = 'main__grid';

conteiner.append(banner, mainMain);
mainMain.append(main);

const mainCaption = document.createElement('h2');
mainCaption.className = 'main__caption';
mainCaption.innerText = '4 types of plants';
main.append(mainCaption);

class Plant {
	constructor(capt, imgPath, cnt, mini) {
		this.caption = capt;
		this.pic = imgPath;
		this.count = cnt;
		this.imgType = mini;
	}
}

const data = [
	new Plant('Foliage', 'img/Rect133.png', 21, 'img/plant1.png'),
	new Plant('Pucculent', 'img/Rect132.png', 4, 'img/plant2.png'),
	new Plant('Flower', 'img/Rect131.png', 8, 'img/plant3.png'),
	new Plant('Fruit', 'img/Rect130.png', 10, 'img/plant4.png')
];

let mainContent = '';

data.forEach(plant => {
	mainContent += `
		<div class='main__item' style='background-image: url(${plant.pic})'>
			<h3>${plant.caption}</h3>
			<div class='main__item-text'>${plant.count}</div>
			<img alt='${plant.caption}' src='${plant.imgType}'>
		</div>
	`
})

main.innerHTML += mainContent;

//add the header
const header = document.createElement('header');
header.className = 'header';
conteiner.before(header);

const logo = document.createElement('img');
logo.className = 'header__logo';
logo.setAttribute('alt', 'pic');
logo.setAttribute('src', './img/logo.png');

header.append(logo);

header.innerHTML += `
	<a href="#">Service</a>
	<a href="#">Blog</a>
	<a href="#">Shop</a>
	<a href="#">Location</a>
`;

const a = header.querySelectorAll('a');

for (let val of a) {
	val.className = 'header__links'
}

const buttonHead = document.createElement('button');
let checkOutCnt = '0'
buttonHead.className = 'header__button';
buttonHead.innerHTML = `Check Out(${checkOutCnt})`
header.append(buttonHead);

//add text fields and buttons play

const videoBox = document.createElement('div');
videoBox.className = 'banner__main';

const videoText = document.createElement('div');
videoText.className = 'banner__main-text';

const videoCircle = document.createElement('div'),
	videoRect = document.createElement('div');
videoCircle.className = 'banner__main-circle';
videoRect.className = 'banner__main-rect';

const videoBut = document.createElement('button');
videoBut.className = 'banner__main-but';

videoBox.append(videoText, videoCircle, videoBut);
videoCircle.append(videoRect);

videoText.innerHTML += `
<p>Let's find<br> your love<br> <span class="banner__text-green">plants</span></p>

<p class="banner__text-small">Add some color to your home, give it a
little attention, the plants will accompany you quietly</p>
`;

videoRect.style.background = `url('../img/Polygon.png') no-repeat`
videoBut.innerHTML = 'WATCH THE VIDEO'

//add footer

const footer = document.createElement('div');
footer.className = 'banner__footer';

banner.append(videoBox, footer);

let footerContent = '';

data.forEach(plant => {
	footerContent += `
		<img alt='${plant.caption}' src='${plant.imgType}'>
		`
});

footer.innerHTML += footerContent;

// add text and button to main

const mainTextBut = document.createElement('div');
mainTextBut.className = 'main__info';

const mainBut = document.createElement('button');
mainBut.className = 'main__info-but';

const mainTitleGr = document.createElement('h3');
mainTitleGr.className = 'main__info-gr'
const mainText = document.createElement('p');
mainText.className = 'main__info-text';

main.before(mainTextBut);
mainTextBut.append(mainBut, mainTitleGr, mainText);

// main_info_but - h5 - 
mainBut.innerText = 'Try for service';

mainTitleGr.innerText = 'get a beatuful home'.toUpperCase();

mainText.innerText = `If you don’t know what plants you can add to the space We can provide you with selected plants And configure your space`;
