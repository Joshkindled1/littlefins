class Home{
    constructor(element){
        this.container=document.getElementById(element)

    }

    displayBody(){
        // section row
        this.container.className='container'
        const row=document.createElement('div')
        row.className='row'
        this.container.appendChild(row)

        // left div col
        const leftDiv=document.createElement('div')
        leftDiv.className='col-md-5 d-md-flex justify-content-end resp-leftDiv'

        const imgDiv=document.createElement('div')
        imgDiv.className='img-div'

        const img=document.createElement('img')
        img.src='images/littlefinhome.png'
        img.className='img-fluid'

        imgDiv.appendChild(img)
        leftDiv.appendChild(imgDiv)

        // right div col
        const rightDiv=document.createElement('div')
        rightDiv.className='col-md-7 d-md-flex flex-column justify-content-center resp-rightDiv'
        
        const yellowContainer=document.createElement('div')
        yellowContainer.className='border-yellow-bg rounded-5 p-5 border border-3 resp-yellow'  
        
        const heading=document.createElement('p')
        heading.className='fs-1 fw-bold heading resp-heading'
        heading.textContent='Hello, I am Little Fin!'

        const typing=document.createElement('p')
        typing.className='fs-5 py-3 typingText resp-typing'

        const startBtn=document.createElement('button')
        startBtn.className='orange-bg p-4 my-3 text-white rounded-4 fw-bold fs-4 border border-2'
        startBtn.textContent="Let's Start!"

        const disclaimer=document.createElement('p')
        disclaimer.className='my-3 d-flex justify-content-center fs-6'
        disclaimer.textContent='Help Little Fin be financially smart. Learn more here.'

        rightDiv.append(yellowContainer,disclaimer)
        yellowContainer.append(heading,typing,startBtn)

        // row leftdiv col rightdiv col
        row.append(leftDiv,rightDiv)
    }

    typingEffect(){
        var typing = {
            strings: ["Grandpa's birthday is coming and I want to surprise him with a cake. But first, I need to save $15.00. Would you help me please?"],
            typeSpeed: 30, //Typing speed in milliseconds
            backSpeed: 20, //Backspacing speed in milliseconds
            loop: false,
            showCursor: false
        };
        var typed = new Typed('.typingText', typing);
    }

    responsive(){
        console.log('sdfds')
            // document.querySelector('.resp-leftDiv').className='col-12 d-flex px-5'
            // document.querySelector('.resp-rightDiv').className='col-12 flex-column justify-content-center px-4 text-center mt-3'
            // document.querySelector('.resp-yellow').className='border-yellow-bg rounded-5 p-4 border border-3 resp-yellow'
            // document.querySelector('.resp-heading').className='fs-2 fw-bold brown-text'
            // document.querySelector('.resp-typing').className='fs-6'
        } 
    }

