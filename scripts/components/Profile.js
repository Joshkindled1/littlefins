class Profile{
    constructor(element){
        this.section=document.getElementById(element)
        this.section.className='container my-3'
        this.row=document.createElement('div')
        this.row.className='row'
    }

    displayProfile(){
        const profileCol=document.createElement('div')
        profileCol.className='col-md-3'

        const profileColContent=document.createElement('div')
        profileColContent.className='d-md-flex flex-column align-items-center bg-white rounded-5 p-3 h-100'

        const profileHeading=document.createElement('p')
        profileHeading.className='brown-text fs-5 fw-bold'
        profileHeading.textContent='Hello, Smarty!'

        const profilePic=document.createElement('i')
        profilePic.className='fa fa-circle-user fa-5x'

        const playBtn=document.createElement('a')
        playBtn.className='orange-bg text-white px-5 py-2 rounded-4 text-decoration-none my-3 fw-bold'
        playBtn.textContent='Play'

        profileCol.appendChild(profileColContent)
        profileColContent.append(profileHeading,profilePic,playBtn)

        this.section.appendChild(this.row)
        this.row.appendChild(profileCol)
    }

    piggyBank(){
        const piggyCol=document.createElement('div')
        piggyCol.className='col-md-3'

        const piggyColContent=document.createElement('div')
        piggyColContent.className='d-md-flex flex-column align-items-center bg-white rounded-5 p-3 h-100'

        const piggyHeading=document.createElement('p')
        piggyHeading.className='brown-text fs-5 fw-bold'
        piggyHeading.textContent='Piggy Bank'

        const piggyAmount=document.createElement('p')
        piggyAmount.className='circle fw-bold'
        piggyAmount.textContent='$15'

        piggyCol.appendChild(piggyColContent)
        piggyColContent.append(piggyHeading,piggyAmount)

        this.row.appendChild(piggyCol)
    }

    activity(){
        

    }

    



}