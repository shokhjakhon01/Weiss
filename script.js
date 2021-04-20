const navbarLink  = document.querySelectorAll('.navnar__link')
const  dropdown = document.querySelector('.dropdown__window')



navbarLink.forEach((item, i) =>{
  navbarLink[1].onclick = () => dropdown.classList.toggle('active')
  navbarLink[2].addEventListener('click', () =>{
    dropdown.classList.add('active')
    
   
  })

  navbarLink[3].onclick = ()=> dropdown.classList.remove('active')
} )


 