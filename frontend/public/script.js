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
                        <a href="#form"><i class="uil uil-compass"></i>Challenge</a>
                        <a href="#"><i class="uil uil-info-circle"></i>About</a>
                        <a href="#"><i class="uil uil-document-layout-left"></i>Blog</a>
                        <a href="#"><i class="uil uil-envelope"></i>Contact</a>
                    </div>
                </div>
                    <i class="uil uil-list-ui-alt nav-menu-btn"></i>
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
                <a href="#form" class='click-btn'>Go to Challenge<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>
        
       `
}


const swiperComponent = (data,comp) => {
    return`
        <div class="media-icons">
            <a href="#"><i class="uil uil-facebook-f"></i></a>
            <a href="#"><i class="uil uil-instagram"></i></a>
            <a href="#"><i class="uil uil-twitter"></i></a>
        </div>
        <div class="swiper">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}

const swiperComponentThumb = (data,comp) => {
    return`
        <div class="thumb-swiper">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}

const thumbsComponent = ({ filename }) => {
    return `
    <div class="swiper-slide thumb-container">
        <img src="/pub/img/${filename}">
    </div>`;
  };

const formComponent = () => {
    return `
        <div class="container">
            <div class="regform">
                <h1>Share your photos</h1>
            </div>
            <div class="main">
                <form id="form-wrapper">
                    <div class="input-field">
                        <label for="firstname">First name:</label>                       
                        <input id="firstname" type="text" name="first_name">                                                
                    </div>
                    <div class="input-field">
                        <label for="lastname">Last name:</label>                       
                        <input id="lastname" type="text" name="last_name">                                                
                    </div>
                    <div class="input-field">
                        <label>Gender</label>                       
                        <select class="select" name="subject">
                            <option disabled="disabled" selected="selected">--Choose Option--</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>                                         
                    </div>
                    <div class="input-field">
                        <label for="email">E-mail:</label>                       
                        <input id="email" type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required value="default@example.com">                                                
                    </div>
                    <div class="input-field">
                    <label for="title">Photo's title:</label>                       
                    <input id="title" type="text" name="title">                                                
                    </div>
                    <div class="input-field">
                        <label for="country">Country:</label>                       
                        <input id="country" type="text" name="country">                                                
                    </div>
                    <div class="input-field">
                        <label class="description" for="description">Description:</label>                       
                        <textarea id="description" type="text" name="description"></textarea>                                            
                    </div>
                    <div class="input-field">
                        <label for="picture">Upload a photo:</label>                       
                        <input id="picture" type="file" name="picture">                                                
                    </div>

                    <div class="input-field">
                        <label for="student">Did you like it?</label>                       
                        <label class="radio">
                            <input class="radio-one" type="radio" checked="checked" name="like" value="1">
                            Yes
                            <span class="checkmark"><span>
                        </label>
                        <label class="radio">
                            <input class="radio-two" type="radio" value="0" name="like">
                            No
                            <span class="checkmark"><span>
                        </label>                                          
                    </div>

                    <div class="button">
                        <button id="submit" type="submit">Send</button>
                        <button id="delete">Delete</button>
                    </div>
                </form>
            </div>   
        </div>

    `
}

const responseComponent = () => {
    return`
        <div class="response-wrapper">
            <i id="response-x" class="uil uil-times response-close-btn"></i>
            <h1>Gratulations!</h1>
            <p>Thank you for sharing your photo!</p>
            <p>Scroll up, refresh and check your photo on the landing page!</p>
            <a href="#home">Ok</a>
        </div>  
    
    
    `
}

const footerComponent = () => {
    return`
        <footer>
            <div class="row">
                <div class="col">
                    <a href="" class="logo">Logo</a>      
                    <p class="subs">Subsribe on other social media platform and get immediate notification of latest news.</p>      
                </div>
                <div class="col">
                    <h3>Office <div class="underline"><span></span></div></h3>
                    <p>example Road</p>
                    <p>example, City</p>
                    <p>Something street, 1234, Hungary</p>
                    <p class="email">cintia.nyerges@gmail.com</p>
                    <h4>+36703007874</h4>                
                </div>
                <div class="col">
                    <h3>Links <div class="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="#"><i class="uil uil-home"></i>Home</a></li>
                        <li><a href="#form"><i class="uil uil-compass"></i>Challenge</a></li>
                        <li><a href="#"><i class="uil uil-info-circle"></i>About</a></li>
                        <li><a href="#"><i class="uil uil-document-layout-left"></i>Blog</a></li>
                        <li><a href="#"><i class="uil uil-envelope"></i>Contact</a></li>
                
                </div>
                <div class="col">
                    <h3>Newsletter <div class="underline"><span></span></div></h3>
                    <form class="footer-form">
                        <a href="#"><i class="uil uil-envelope"></i></a>
                        <input type="email" placeholder="Enter your e-mail" required>
                        <button type="submit"><i class="uil uil-arrow-right"></i></button>
                    </form>
                    <div class="social-icons">
                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                        <a href="#"><i class="uil uil-instagram"></i></a>
                        <a href="#"><i class="uil uil-twitter"></i></a>
                        <a href="#"><i class="uil uil-whatsapp"></i></a>
                    </div>
                </div>
            </div> 
            <hr>
            <p class="copyright">Cintia Nyerges <i class="uil uil-copyright"></i> 2022 - All Rights Reserved</p>
  
        
     
        </footer>
    
    
    
    `
}



/* LOAD EVENT */

const loadEvent = async () => {

    const rootElement = document.getElementById('root')
    const formElement = document.getElementById('form')
    const footerElement = document.getElementById('footer')
    
    
    const result = await parseJSON('image-list')
    
    /* RENDERING TO THE DOM */
    
    rootElement.insertAdjacentHTML('beforeend', headerComponent());
    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result,swiperSlideComponent));
    rootElement.insertAdjacentHTML('beforeend', swiperComponentThumb(result,thumbsComponent));    
    formElement.insertAdjacentHTML('beforeend', formComponent());
    footerElement.insertAdjacentHTML('beforeend', footerComponent())
    
    /* FORMDATA / FETCH / RESPONSE / SEND TO BACKEND */
    
    const formWrapper = document.getElementById('form-wrapper')
    const sendButton = document.getElementById('submit')
    console.log(formWrapper)


    formWrapper.addEventListener('submit', (e)=>{
        e.preventDefault()

        const formData = new FormData()


        formData.append('title', e.target.querySelector(`input[name='title']`).value);
        formData.append('country', e.target.querySelector(`input[name='country']`).value);
        formData.append('description', e.target.querySelector(`textarea[name='description']`).value);
        formData.append('picture', e.target.querySelector(`input[name='picture']`).files[0]);

        const fetchSettings = {
            method: "POST",
            body: formData
        }

        fetch('/', fetchSettings)
              .then(async data =>{
                if(data.status === 200){
                    const res = await data.json()
                    console.log(res);
                    document.querySelector("swiper-wrapper").insertAdjacentHTML('beforeend', `<img src="/pub/img/${title}>`) 
                }
            })
            
/*         document.getElementById("submit").addEventListener('click', () =>{
            formElement.insertAdjacentHTML('beforeend', responseComponent())

        }) */
        formElement.insertAdjacentHTML('beforeend', responseComponent())
        formElement.classList.add("formBackround")

  
/*         const x = document.getElementById("response-x")
   
        x.addEventListener("click", () => {
            document.querySelector("response-wrapper").classList.remove("response-wrapper")
            formElement.classList.remove("formBackround")
        })
 */

    })




/* STICKY HEADER */

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header")
    
        header.classList.toggle("sticky", window.scrollY > 0)

    })

/* NAVBAR */

    const menuBtn = document.querySelector(".nav-menu-btn")
    const closeBtn = document.querySelector(".nav-close-btn")
    const navigation = document.querySelector(".navigation")

    menuBtn.addEventListener("click", () =>{
        navigation.classList.add("active")
    })
    closeBtn.addEventListener("click", () =>{
        navigation.classList.remove("active")
    })

/* SWIPER */
    
    const swiper = new Swiper('.swiper', {
        loop: true,
/*         thumbs: {
            swiper: swiper,
        },  */
    })

    const swiper2 = new Swiper(".thumb-swiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 4,
/*         freeMode: true,
        watchSlidesProgress: true, */
        thumbs: {
            swiper: swiper,
        }
    });    



}
window.addEventListener('load', loadEvent)