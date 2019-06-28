class Carousel {
    constructor(carousel, firstItem, lastItem) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.activeImages = this.carousel.querySelectorAll('.active-img');
        this.images = this.carousel.querySelectorAll('[data-img]');
        this.indexOfFirstItem = firstItem;
        this.indexOfLastItem = lastItem;
        this.arr = Array.from(this.images);
        window.addEventListener('resize', () => this.phoneView(), true);
        this.rightButton.addEventListener('click', () => this.btnRight());
        this.leftButton.addEventListener('click', () => this.btnLeft());
    }

    phoneView(){
        if(window.innerWidth > 700){
            this.carousel.querySelectorAll('.active-img').forEach(one => one.classList.remove('active-img'));
            this.newArr = this.carousel.querySelectorAll('.box');
            for(let i=0; i < 4; i++){
                this.newArr[i].classList.add('active-img');
            }
        }
    }
    btnRight(){
        if(window.innerWidth > 700){
            console.log(this.indexOfFirstItem)
            console.log(this.indexOfLastItem)
            if(this.indexOfLastItem != this.arr.length){
                this.firstImage = this.carousel.querySelector(`[data-img='${++this.indexOfFirstItem}']`);
                this.lastImage = this.carousel.querySelector(`[data-img='${++this.indexOfLastItem}']`);
                console.log(this.indexOfFirstItem)
                console.log(this.indexOfLastItem)
                this.firstImage.classList.remove('active-img');
                this.lastImage.classList.add('active-img');
            }
        }

    }
    btnLeft(){
        if(window.innerWidth > 700){
            console.log(this.indexOfFirstItem)
            console.log(this.indexOfLastItem)

            if(this.indexOfFirstItem != 0){
                this.firstImage = this.carousel.querySelector(`[data-img='${this.indexOfFirstItem--}']`);
                this.lastImage = this.carousel.querySelector(`[data-img='${this.indexOfLastItem--}']`);
                console.log(this.indexOfFirstItem)
                console.log(this.indexOfLastItem)
                this.firstImage.classList.add('active-img');
                this.lastImage.classList.remove('active-img');
            }
        }

    }
}

class PhoneCarousel{
    constructor(carousel){
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.img = this.carousel.querySelector('[data-img]');
        this.allItems = this.carousel.querySelectorAll('.data-img');

        window.addEventListener('resize', () => this.phoneView(), true);
        this.rightButton.addEventListener('click', () => this.btnRight());
        this.leftButton.addEventListener('click', () => this.btnLeft());
        this.item = 1;
    }
    phoneView(){
        if(window.innerWidth <= 700){
            this.carousel.querySelectorAll('.active-img').forEach(one => one.classList.remove('active-img'));
            this.img.classList.add('active-img');
        }
    }
    btnRight(){
        if(window.innerWidth <= 700) {
            if (6 != this.item) {
                this.carousel.querySelector(`[data-img = '${this.item}']`).classList.remove('active-img');
                this.carousel.querySelector(`[data-img = '${++this.item}']`).classList.add('active-img');
                console.log(this.item);
            }
        }
    }
    btnLeft(){
        if(window.innerWidth <= 700) {
            console.log(this.item);
            if (1 != this.item) {
                this.carousel.querySelector(`[data-img = '${this.item}']`).classList.remove('active-img');
                this.carousel.querySelector(`[data-img = '${--this.item}']`).classList.add('active-img');
                console.log(this.item);
            }
        }
    }
}
let phoneCarousel = document.querySelectorAll('.carousel')
    .forEach(one => new PhoneCarousel(one));

let carousel = document.querySelectorAll('.carousel')
    .forEach(one => new Carousel(one,0,4));
