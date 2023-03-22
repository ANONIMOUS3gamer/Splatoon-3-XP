 const hamburgerToggler = document.querrySelector("hamburger")
 const navLinksContainer = document.querrySelector
 (".navlinks-container")

 const toggleNav = e => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute
    ("aria-expended") === "true" ? "false" : "true"
    hamburgerToggler.setAttibute("aria-expended", ariaToggle)

    navLinksContainer.classList.toggle("open")
 }
 hamburgerToggler.addEventListerner("click", toggleNav)

 new ResizeObserver(entries => {
    console.log(entries);  
    if(entries[0].contentRect.width <=900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }else {
        navLinksContainer.style.transition = "none"
    }
 }).observe(document.body)

