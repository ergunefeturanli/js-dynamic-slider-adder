class SliderCreator {
    constructor(categories) {
        this.categories = categories;
    }

    initializeSlider1() {
        this.createSliderHtml()
        this.styleClickedLink()
        this.styleSlider1()
        this.markSelectedLink()
        this.makeWheelY()
    }

    initializeSlider2() {
        this.createSliderHtml()
        this.styleClickedLink2()
        this.styleSlider2()
        this.markSelectedLink()
        this.makeWheelY()
    }

    createSliderHtml() {
        const sliderDiv = document.createElement("div");
        sliderDiv.id = 'slider-div'
        sliderDiv.className='row'
        sliderDiv.innerHTML = ''

        this.categories.forEach((category) => {
            sliderDiv.innerHTML += `

                <a href="${category.link}">${category.name}</a>

            `
        })

        //******
        // SELECTING THE IMPLEMENTION AREA
        // Default is for https://www.panco.com.tr/kiz-cocuk/

        const pancoDiv = document.querySelector('.col-sm-10.pr-0.js-list-products.pl-0')
        pancoDiv.insertAdjacentElement('afterbegin',sliderDiv)

        //  const pancoDiv = document.querySelector('.product-list .row')
        // pancoDiv.insertAdjacentElement('beforebegin',sliderDiv)

        // const pancoDiv = document.querySelector('.col-sm-12.pl-0.list-options.hidden-xs')
        // pancoDiv.insertAdjacentElement('afterend',sliderDiv)

        // document.body.appendChild(sliderDiv);
    }

    //This is a bonus feature for web version, it makes the slider slide with mousewheel

    makeWheelY() {
        const sliderScroll = document.querySelector("#slider-div");
        sliderScroll.addEventListener('wheel', (event) => {
            if (!event.deltaY) {
                return;
            }

            event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
            event.preventDefault();
        });
    }

    //Styling the Design1 for Slider

    styleSlider1() {
        const styles = `
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 5px;
        }

        ::-webkit-scrollbar-thumb {
            width: 10%;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, .5);
            -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
        }

        #slider-div {
            display: flex;
            overflow: scroll;
            display: flex;
            width: 100%;
            padding: 5px 5px;
            box-sizing: border-box;
            border: 1px 0px 1px 0px black solid;
        }


        #slider-div a {
            text-align: center;
            margin: 5px;
            background-color: #65226D;
            border-radius: 10px;
            padding: 8px;
            font-weight: bold;
            box-sizing: border-box;
        }

        #slider-div > a,
        #slider-div > a:active,
        #slider-div > a:hover,
        #slider-div > a:link,
        #slider-div > a:visited {

            cursor: pointer;
            outline: none;
            color: white;
            text-decoration: none !important;
        }
        `
        const cascadingStyleSheet = document.createElement('style');
        cascadingStyleSheet.innerText = styles
        document.head.appendChild(cascadingStyleSheet);
    }

    //Styling the Design2 for Slider

    styleSlider2() {
        const styles = `
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 5px;
        }

        ::-webkit-scrollbar-thumb {
            width: 10%;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, .5);
            -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
        }

        #slider-div {
            display: flex;
            overflow: scroll;
            display: flex;
            width: 100%;
            padding: 5px 5px;
            box-sizing: border-box;
            border: 1px 0px 1px 0px black solid;
        }


        #slider-div a {
            text-align: center;
            margin: 5px;
            background-color: white ;
            color: #65226D ;
            border-radius: 10px;
            padding: 8px;
            font-weight: bold;
            border: 2.5px solid #65226D ;
        }

        #slider-div > a,
        #slider-div > a:active,
        #slider-div > a:hover,
        #slider-div > a:link,
        #slider-div > a:visited {

            cursor: pointer;
            outline: none;
            text-decoration: none !important;
        }
        `
        const cascadingStyleSheet = document.createElement('style');
        cascadingStyleSheet.innerText = styles
        document.head.appendChild(cascadingStyleSheet);
    }

    //Styling the Design1 for Slider after Clicked and Page Reloaded

    styleClickedLink() {
        const clickedLinkSyle = `
        .selected-slider {
            text-align: center;
            margin: 5px;
            background-color: white !important;
            color: #65226D !important;
            border-radius: 10px;
            padding: 8px;
            font-weight: bold;
            border: 2.5px solid #65226D !important;
            box-sizing: border-box;
        }
        `

        
        const clickedLinkStyleSheet = document.createElement('style');
        clickedLinkStyleSheet.innerText = clickedLinkSyle
        document.head.appendChild(clickedLinkStyleSheet)
    }

    //Styling the Design1 for Slider after Clicked and Page Reloaded

    styleClickedLink2() {
        const clickedLinkSyle = `
        .selected-slider {
            text-align: center;
            margin: 5px;
            background-color: #65226D !important;
            color: white !important;
            border-radius: 10px;
            padding: 8px;
            font-weight: bold;
            box-sizing: border-box;
        }
        `

        
        const clickedLinkStyleSheet = document.createElement('style');
        clickedLinkStyleSheet.innerText = clickedLinkSyle
        document.head.appendChild(clickedLinkStyleSheet)
    }

    //Styling slider element that selected, it matches the link href and site url and adding it a class to design

    markSelectedLink() {
        let sliderLinksArray = []
        const links = document.querySelectorAll('#slider-div a')

        links.forEach((link) => {

            sliderLinksArray.push(link.href)

            if (link.href == window.location.href) {

                link.classList.add('selected-slider')
            }
        })

    }

}

// *****
//WE CAN ADD MORE CATEGORIES, CODE WILL IMPLEMENT THEM TOO

const categories = [
    {
        name: "Atlet",
        link: "https://www.panco.com.tr/kiz-bebek-atlet/"
    },
    {
        name: "Astronot",
        link: "https://www.panco.com.tr/kiz-bebek-astronot/"
    },
    {
        name: "Body",
        link: "https://www.panco.com.tr/kiz-bebek-body/"
    },
    {
        name: "Elbise",
        link: "https://www.panco.com.tr/kiz-bebek-elbise/"
    },
    {
        name: "Eşofman",
        link: "https://www.panco.com.tr/kiz-bebek-esofman/"
    },
    {
        name: "Etek",
        link: "https://www.panco.com.tr/kiz-bebek-etek/"
    },
    {
        name: "Gömlek",
        link: "https://www.panco.com.tr/kiz-bebek-gomlek/"
    }
]

//Default Design for Panco

const fxFunction = new SliderCreator(categories)
fxFunction.initializeSlider1()


//Another Design for Panco for A/B Test

// const fxFunction = new SliderCreator(categories)
// fxFunction.initializeSlider2()




