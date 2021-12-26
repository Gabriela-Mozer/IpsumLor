//const main = document.querySelector('.great');


const options = { 
  //root:null, /// to jest viewport 
  threshold : 0.5,  // jak mamy 0.25 to 25% main jest widoczne dla viewportu
 // rootMargin: '-150px'
}


const observer = new IntersectionObserver(
  mainObserver,options)

  function mainObserver(entires, observer){
    entires.forEach(entry =>{
      if(entry.isIntersecting){
        const main = entry.target;
        const greatlazy = main.dataset.src;
        console.log(main);
        main.src = greatlazy;
      }
    })
  }

  let main = document.querySelector('.great');
  
  observer.observe(main)