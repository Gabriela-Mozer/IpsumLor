
const  main = document.querySelectorAll('.great');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting)observer.unobserve(entry.target)
    })
    
},{
    threshold: 0.5,

});

main.forEach(great=>{
    observer.observe(great);
})

