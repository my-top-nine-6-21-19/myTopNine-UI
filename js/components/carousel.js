class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel)
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        console.log(this.rightButton)
        this.activeImages = this.carousel.querySelectorAll('.active-img');
        this.images = this.carousel.querySelectorAll('[data-img]');
        this.indexOfFirstItem = 0;
        this.indexOfLastItem = 4;
        this.rightButton.addEventListener('click', () => this.btnRight());
        this.leftButton.addEventListener('click', () => this.btnLeft());
    }
    btnRight(){
        this.firstImage = this.carousel.querySelector('.active-img');
        this.lastImage = this.carousel.querySelector(`[data-img='${++this.indexOfLastItem}']`);
        this.firstImage.classList.remove('active-img');
        this.lastImage.classList.add('active-img');
    }
    btnLeft(){
        console.log(this.indexOfLastItem);
        this.firstImage = this.carousel.querySelector(`[data-img='${this.indexOfLastItem-4}']`);
        this.lastImage = this.carousel.querySelector(`[data-img='${--this.indexOfLastItem}']`);
        this.firstImage.classList.add('active-img');
        this.lastImage.classList.remove('active-img');
    }
}

let carousel = document.querySelectorAll('.carousel')
    .forEach(one => new Carousel(one));
