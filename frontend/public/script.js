const parseJSON = async (url) =>{
    const response = await fetch(url);
    return response.json()
}


//COMPONENTS

const headerComponent = () => {
    return `
        <header>
            <div class='nav-bar'>
                <a href="" class="logo">Logo</a>
                <div class="navigation">
                    <div class="nav-items">
                        <i class="uil uil-times nav-close-btn"></i>
                        <a href="#"><i class="uil uil-home"></i>Home</a>
                        <a href="#"><i class="uil uil-compass"></i>Explore</a>
                        <a href="#"><i class="uil uil-info-circle"></i>About</a>
                        <a href="#"><i class="uil uil-document-layout-left"></i>Blog</a>
                        <a href="#"><i class="uil uil-envelope"></i>Contact</a>
                    </div>
                </div>
                <i class="uil uil-apps nav-menu-btn"></i>
            </div>
        </header>
        `
}

const swiperSlideComponent = ({ title, filename, country}) =>{
    return `
        <div class='swiper-slide dark-layer'>
            <img src="/pub/img/${filename}"> 
            <div class="text-content">
                <h2 class="title">${country} <span>${title}</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="#" class='click-btn'>Go to Challange<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>
        
       `
}


const swiperComponent = (data,comp) => {
    return`
        <div class="swiper">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}
const swiperComponentThumb = (data,comp) => {
    return`
        <div class="mySwiper2">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}

const thumbsComponent = ({filename}) => {
    return `
    <div class="swiper">
        <div class="swiper-wrapper thumbs-container">
             <div class="swiper-slide">
                <img src="/pub/img/${filename}"> 
            </div>
        </div>
    </div>
`
}


const loadEvent = async () => {

    const rootElement = document.getElementById('root')

    const result = await parseJSON('image-list')

    rootElement.insertAdjacentHTML('beforeend', headerComponent());
    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result,swiperSlideComponent));
    rootElement.insertAdjacentHTML('beforeend', swiperComponentThumb(result,thumbsComponent));
    
    const swiper = new Swiper('.swiper', {
        loop: true,
    })
    
    const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        thumbs: {
            swiper: swiper,
        },
    });
    

      
/*     const swiper = new Swiper('.swiper', {
        loop: true,
         slidesPerView: 4, 
         freeMode: true, 
         watchSlidesProgress: true, 

    })

    const swiper2 = new Swiper(".swiper", {
        loop: true,
        spaceBetween: 10, 
        thumbs: {
          swiper: swiper,
        },
      });
 */




}
window.addEventListener('load', loadEvent)