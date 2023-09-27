
const listContainer = document.querySelector('.nav__container').children

// filter

for(let i=0; i < listContainer.length; i++){
      listContainer[i].addEventListener('click', (e) =>{
            for(let g=0; g < listContainer.length; g++){
                  listContainer[g].classList.remove('active')
            }
            const eventTarget = e.target

            eventTarget.classList.add('active')

            const galleryItem = document.querySelectorAll('.gallery-item')
            let dataImg = eventTarget.getAttribute('data-sort')

            console.log(dataImg)

            for(let i=0; i < galleryItem.length; i++){
                  galleryItem[i].classList.add('dnone')
                  galleryItem[i].classList.remove('d-inline-block')

                  if(galleryItem[i].getAttribute('data-set') === dataImg || dataImg == 'all'){
                        galleryItem[i].classList.remove('dnone')
                        galleryItem[i].classList.add('d-inline-block')
                  }
            }
      })
}


 // block scroll
//  const galleryItem = document.querySelectorAll('.gallery-item')
//  const body = document.querySelector('.body')
//  const hideBox = document.querySelector('.hide-box')

 

//  for (const item of galleryItem) {
//        item.addEventListener('click', ()=>{
//             body.classList.add('scroll-hidden')
//             hideBox.classList.add('max-width')
//        })
//  }

//  hideBox.addEventListener('click', () =>{
//       body.classList.remove('scroll-hidden')
//       hideBox.classList.remove('max-width')
//  })

lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true,
      'disableScrolling':true,
    })


 
