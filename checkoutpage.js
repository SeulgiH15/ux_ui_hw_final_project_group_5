let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var submenus = document.querySelectorAll("ul.sub-menu");
if (submenus.length > 0) for (var i = 0; i < submenus.length; i++) {
    var span = document.createElement('span');
span.classList.add('expand');
span.innerHTML = "+";

span.addEventListener('click', function () {
this.classList.toggle('active');
// this.nextElementSibling.classList.toggle('active');
this.parentNode.classList.toggle('active');
    });

submenus[i].previousElementSibling.appendChild(span);
submenus[i].parentNode.insertBefore(span, submenus[i]);
}



(function () {

function toggleClasses(classes, obj) {
    if (!classes) return;
    if (!obj) return;
    for (var n = 0; n < classes.length; n++) obj.classList.toggle(classes[n].trim());
}

    function applyToTargets(targetslist, dototargets, obj, dotoself, dotonext) {
        if (!targetslist) return;
if (!dototargets) return;

targetslist = targetslist.split(',');

for (var n = 0; n < targetslist.length; n++) {
targetslist[n] = targetslist[n].trim();

if ((targetslist[n] == 'this' || targetslist[n] == 'self') && obj && dotoself) dotoself(obj);
if (targetslist[n] == 'next' && obj && dotonext) dotonext(obj.nextElementSibling);
else {
                var elems = document.querySelectorAll(targetslist[n]);
                if (elems.length > 0) {
                    for (var m = 0; m < elems.length; m++) {
dototargets(elems[m]);
                    }
                }
            }
        }
    }

var clickToggle = document.querySelectorAll('[data-toggle-class]');

    if (clickToggle.length > 0) {
        for (var i = 0; i < clickToggle.length; i++) {
clickToggle[i].addEventListener('click', function (e) {
    e.preventDefault();

    var classes = this.getAttribute('data-toggle-class');
    if (!classes) return;

    classes = classes.split(',');
    for (var n = 0; n < classes.length; n++) classes[n] = classes[n].trim();

    var targets = this.getAttribute('data-toggle-target');

    if (!targets) toggleClasses(classes, this); //for(var n=0; n<classes.length; n++)  this.classList.toggle(classes[n]);
    else {
        applyToTargets(targets, function (elem) { toggleClasses(classes, elem); }, this, function (elem) { toggleClasses(classes, elem); }, function (elem) { toggleClasses(classes, elem); });
    }
});
        }
    }
})();

function incrementValue(i) {
    var value = parseInt(document.getElementById('quantity' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        document.getElementById('quantity' + i).value = value;
        var price = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('subtoal' + i).value = value * price;

        var total = 0;
        for (var i = 1; i < 4; i++) {
            if (document.getElementById('subtoal' + i) != null)
                total = total + parseInt(document.getElementById('subtoal' + i).value);
        }
        document.getElementById('total').value = total;
    }
}
function decrementValue(i) {
    var value = parseInt(document.getElementById('quantity' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('quantity' + i).value = value;
        var price = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('subtoal' + i).value = value * price;
        var total = 0;
        for (var i = 1; i < 4; i++) {
            if (document.getElementById('subtoal' + i) != null)
                total = total + parseInt(document.getElementById('subtoal' + i).value);
        }
        document.getElementById('total').value = total;
    }
}
function removeBox(i) {
    var total = parseInt(document.getElementById('total').value);
    var remove = parseInt(document.getElementById('subtoal' + i).value);
    document.getElementById('total').value = total - remove;
    document.getElementById('subtoal' + i).value = 0;
    document.getElementById('price' + i).value = 0;
}
function reset() {
    for (var i = 1; i < 4; i++) {
        document.getElementById('price' + i).value = 100 * i;
    }
    for (var i = 1; i < 4; i++) {
        document.getElementById('quantity' + i).value = 1;
        document.getElementById('subtoal' + i).value = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('total').value = parseInt(document.getElementById('subtoal' + i).value, 10);
    }
    var total = 0;
    for (var i = 1; i < 4; i++) {
        total = total + parseInt(document.getElementById('subtoal' + i).value, 10);
    }
    document.getElementById('total').value = total;
}

