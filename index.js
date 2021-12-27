const main = document.querySelector('.great');



const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    entry.target.classList.toggle('show', entry.isIntersecting)
    //if(entry.isIntersecting) observer.unobserve(entry.target)
  },{
    threshold :0.01,
   // rootMargin : '10px'
  })
  console.log(entries)
})
const lastObserver = new IntersectionObserver(entries =>{
  const lastOne = entries
  if(!lastCard.isIntersecting) return
  loadnewCard()
})

observer.observe(main)

// function loadnewCard(){
// for(let i =0; i<10; i++){
//   const card = document.createElement('div')
//   card.textContent = 'nówka'
//   card.classList.add('main');
//   observer.observe(card)
//   mainContainer.append(card)
// }
// }