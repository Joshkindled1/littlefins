// EventListener to instantiate the navController
let spinner= null;

document.addEventListener("DOMContentLoaded", (event) => {
    
    // Instantiate an instance of the siteMenu
    const navController = new NavController("navbarNav");
    navController.displayNav();

    spinner = new Spinner();
});
