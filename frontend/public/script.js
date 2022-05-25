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

const swiperSlideComponent = ({ title, filename}) =>{
    return `
        <div class='swiper-slide'>
            <h2 class='title'>${title}</h2>
            <img src="/pub/img/${filename}">
 
        </div>
    `
}

const swiperComponent = (data,comp) => {
    return`
        <div class="swiper" id="swiper-div">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>        
    `
}





const loadEvent = async () => {

    const rootElement = document.getElementById('root')

    const result = await parseJSON('image-list')

    rootElement.insertAdjacentHTML('beforeend', headerComponent())
    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result,swiperSlideComponent))

    const swiper = new Swiper('.swiper', {
        loop: true,
    })




}
window.addEventListener('load', loadEvent)