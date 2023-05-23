var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var DETAIL_DESCRIPTION_SELECTOR = '[data-image-role="description"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var ESC_ENTER = 13;

function setDetails(imageUrl, titleText, description) {
    "use strict";
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute("src", imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    var detailDescription = document.querySelector(DETAIL_DESCRIPTION_SELECTOR);
    detailDescription.textContent = description;
}

function getImageFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-url");
}

function getTitleFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-title");
}

function getDescFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-description");
}

function setDetailsFromThumb(thumbnail) {
    "use strict";
    setDetails(getImageFromThumb(thumbnail), getTitleFromThumb(thumbnail), thumbnail.getAttribute("desc"));
}

function addThumbClickHandler(thumb) {
    "use strict";
    thumb.addEventListener("click", function(event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function addKeypressHandler() {
    "use strict";
    document.body.addEventListener("keyup", function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if ( event.keyCode === ESC_KEY ) {
            hideDetails();
        }
        if ( event.keyCode === ESC_ENTER ) {
            showDetails();
        }
    });
}

function getThumbnailsArray() {
    "use strict";
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    return [].slice.call(thumbnails);
}

function hideDetails() {
    "use strict";
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    "use strict";
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50)
    console.log(frame);
}

// IIFE
(function(thumbnails) {
    "use strict";
    thumbnails.forEach(addThumbClickHandler);
    addKeypressHandler();
})(getThumbnailsArray());

(function(window) {
    "use strict";
    var App = window.App;
    window.myTruck = new App.Truck('114514', new App.DataStore());
    window.myTruck = myTruck;
})(window);

// (function() {
//     var myTruck = new App.Truck('114514', new App.DataStore());
// })();