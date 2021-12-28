const main = document.querySelector(".great");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
      //console.log(entries)
    } else {
      entry.target.classList.remove("show");
      //observer.unobserve(entry.target);
    }
  });
};
const options = {
  rootMargin: "20px",
  //threshold: 0.3,
};

const myObserver = new IntersectionObserver(callback, options);
myObserver.observe(main);

const text = document.querySelector(".text__article");

const calltext = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      //observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove("show");
    }
    const options = {
      rootMargin: "20px",
      threshold: 0.15,
    };
  });
};
const textObserver = new IntersectionObserver(calltext, options)
textObserver.observe(text);


const offersheading = document.querySelector('.offers__container--heading');


const calloffer = (entries, observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
     // observer.unobserve(entry.target)
     // console.log(entry.target)
    }
    else{
      entry.target.classList.remove('show')
      //observer.unobserve(entry.target)
    };
    const options={
      rootMargin: '0px',
      threshold:0.15
    }
  })
}
const offerObserver = new IntersectionObserver(calloffer,options);
offerObserver.observe(offersheading)


const offersheadingrich = document.querySelector('.offers__container--headingFirst');


const callofferrich = (entries, observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
     // observer.unobserve(entry.target)
     // console.log(entry.target)
    }
    else{
      entry.target.classList.remove('show')
      //observer.unobserve(entry.target)
    };
    const options={
      rootMargin: '0px',
      threshold:0.15
    }
  })
}
const offerrichObserver = new IntersectionObserver(callofferrich,options);
offerObserver.observe(offersheadingrich)


const paragraphfirst = document.querySelector('.offers__container--paragraph--first');


const callbackparagraphFirst = (entries, observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
     // observer.unobserve(entry.target)
     // console.log(entry.target)
    }
    else{
      entry.target.classList.remove('show')
      //observer.unobserve(entry.target)
    };
    const options={
      rootMargin: '0px',
      threshold:0.15
    }
  })
}
const paragraphFirstObserver= new IntersectionObserver(callbackparagraphFirst,options);
paragraphFirstObserver.observe(paragraphfirst)

const paragraphsec = document.querySelector('.offers__container--paragraph');


const callbackparagraphsec = (entries, observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
     // observer.unobserve(entry.target)
     // console.log(entry.target)
    }
    else{
      entry.target.classList.remove('show')
      //observer.unobserve(entry.target)
    };
    const options={
      rootMargin: '0px',
      threshold:0.15
    }
  })
}
const paragraphSecObserver= new IntersectionObserver(callbackparagraphsec,options);
paragraphSecObserver.observe(paragraphsec)

const button = document.querySelector('.offers__container--price');
//const button = document.getElementsByName('offers');

const callbackbutton = (entries, observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
     // observer.unobserve(entry.target)
     // console.log(entry.target)
    }
    else{
      entry.target.classList.remove('show')
      //observer.unobserve(entry.target)
    };
    const options={
      rootMargin: '0px',
      threshold:0.15
    }
  })
}
const buttonObserver= new IntersectionObserver(callbackbutton,options);
buttonObserver.observe(button)