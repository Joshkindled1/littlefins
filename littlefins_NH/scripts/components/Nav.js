class Nav{
    constructor(element){
        this.navMenu=document.getElementById(element)
        this.navbar=document.createElement('ul')
        this.navItems=[
            {"title":_HOME_TITLE, "url": _HOME_URL}, 
            {"title":_ABOUT_TITLE, "url": _ABOUT_URL},
            {"title":_PARENTS_TITLE, "url": _ABOUT_URL},
            {"title":_PARTNERS_TITLE, "url": _ABOUT_URL},
            {"title":_LOGIN_TITLE, "url": _LOGIN_URL}
        ]
    }

    displayNav(){
       this.navbar.className='navbar-nav ms-auto'
       this.navMenu.appendChild(this.navbar)

       this.navItems.forEach(item=>{
        const li=document.createElement('li')
        li.className='nav-item'

        const a=document.createElement('a')
        a.className='nav-link'
        a.href=item.url
        a.textContent=item.title.charAt(0).toUpperCase()+item.title.slice(1)

        li.appendChild(a)
        this.navbar.appendChild(li)
        
       })
    }




}