"use strict";

var main = document.querySelector(".great");

var callback = function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); //

      observer.unobserve(entry.target); //console.log(entries)
    } else {
      entry.target.classList.remove("show"); //observer.unobserve(entry.target);
    }
  });
};

var options = {
  rootMargin: "20px",
  threshold: 0.1
};
var myObserver = new IntersectionObserver(callback, options);
myObserver.observe(main);
var text = document.querySelector(".text__article");

var calltext = function calltext(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); //observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove("show");
    }

    var options = {
      rootMargin: "20px",
      threshold: 0.15
    };
  });
};

var textObserver = new IntersectionObserver(calltext, options);
textObserver.observe(text);
var offersheading = document.querySelector('.offers__container--heading');

var calloffer = function calloffer(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // observer.unobserve(entry.target)
      // console.log(entry.target)
    } else {
      entry.target.classList.remove('show'); //observer.unobserve(entry.target)
    }

    ;
    var options = {
      rootMargin: '0px',
      threshold: 0.15
    };
  });
};

var offerObserver = new IntersectionObserver(calloffer, options);
offerObserver.observe(offersheading);
var offersheadingrich = document.querySelector('.offers__container--headingFirst');

var callofferrich = function callofferrich(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // observer.unobserve(entry.target)
      // console.log(entry.target)
    } else {
      entry.target.classList.remove('show'); //observer.unobserve(entry.target)
    }

    ;
    var options = {
      rootMargin: '0px',
      threshold: 0.15
    };
  });
};

var offerrichObserver = new IntersectionObserver(callofferrich, options);
offerObserver.observe(offersheadingrich);
var paragraphfirst = document.querySelector('.offers__container--paragraph--first');

var callbackparagraphFirst = function callbackparagraphFirst(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // observer.unobserve(entry.target)
      // console.log(entry.target)
    } else {
      entry.target.classList.remove('show'); //observer.unobserve(entry.target)
    }

    ;
    var options = {
      rootMargin: '0px',
      threshold: 0.15
    };
  });
};

var paragraphFirstObserver = new IntersectionObserver(callbackparagraphFirst, options);
paragraphFirstObserver.observe(paragraphfirst);
var paragraphsec = document.querySelector('.offers__container--paragraph');

var callbackparagraphsec = function callbackparagraphsec(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // observer.unobserve(entry.target)
      // console.log(entry.target)
    } else {
      entry.target.classList.remove('show'); //observer.unobserve(entry.target)
    }

    ;
    var options = {
      rootMargin: '0px',
      threshold: 0.15
    };
  });
};

var paragraphSecObserver = new IntersectionObserver(callbackparagraphsec, options);
paragraphSecObserver.observe(paragraphsec);
var buttons = document.querySelectorAll('.offers__container--price'); //const button = document.getElementsByName('offers');

var callbackbutton = function callbackbutton(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // observer.unobserve(entry.target)
      // console.log(entry.target)
    } else {
      entry.target.classList.remove('show'); //observer.unobserve(entry.target)
    }

    ;
    var options = {
      rootMargin: '20px',
      threshold: 0.15
    };
  });
};

var buttonObserver = new IntersectionObserver(callbackbutton, options);
buttons.forEach(function (button) {
  buttonObserver.observe(button);
});