var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),
    popoverList = popoverTriggerList.map(function(e) {
        return new bootstrap.Popover(e)
    }),
    tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
    tooltipList = tooltipTriggerList.map(function(e) {
        return new bootstrap.Tooltip(e)
    });

function setAttributes(t, o) {
    Object.keys(o).forEach(function(e) {
        t.setAttribute(e, o[e])
    })
}
var popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))).map(function(e) {
        return new bootstrap.Popover(e)
    }),
    tooltipList = (tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))).map(function(e) {
        return new bootstrap.Tooltip(e)
    }),
    total = document.querySelectorAll(".nav-pills");

function getEventTarget(e) {
    return (e = e || window.event).target || e.srcElement
}

function copyCode(e) {
    const t = window.getSelection(),
        o = document.createRange();
    var l, n = e.nextElementSibling;
    o.selectNodeContents(n), t.removeAllRanges(), t.addRange(o), document.execCommand("copy");
    window.getSelection().removeAllRanges(), e.parentElement.querySelector(".alert") || ((l = document.createElement("div")).classList.add("alert", "alert-success", "position-absolute", "top-0", "border-0", "text-white", "w-25", "end-0", "start-0", "mt-2", "mx-auto", "py-2"), l.style.transform = "translate3d(0px, 0px, 0px)", l.style.opacity = "0", l.style.transition = ".35s ease", setTimeout(function() {
        l.style.transform = "translate3d(0px, 20px, 0px)", l.style.setProperty("opacity", "1", "important")
    }, 100), l.innerHTML = "Code successfully copied!", e.parentElement.appendChild(l), setTimeout(function() {
        l.style.transform = "translate3d(0px, 0px, 0px)", l.style.setProperty("opacity", "0", "important")
    }, 2e3), setTimeout(function() {
        e.parentElement.querySelector(".alert").remove()
    }, 2500))
}

function debounce(o, l, n) {
    var i;
    return function() {
        var e = this,
            t = arguments;
        clearTimeout(i), i = setTimeout(function() {
            i = null, n || o.apply(e, t)
        }, l), n && !i && o.apply(e, t)
    }
}
total.forEach(function(i, e) {
    var r = document.createElement("div"),
        t = i.querySelector("li:first-child .nav-link").cloneNode();
    t.innerHTML = "-", r.classList.add("moving-tab", "position-absolute", "nav-link"), r.appendChild(t), i.appendChild(r), i.getElementsByTagName("li").length;
    r.style.padding = "0px", r.style.width = i.querySelector("li:nth-child(1)").offsetWidth + "px", r.style.transform = "translate3d(0px, 0px, 0px)", r.style.transition = ".5s ease", i.onmouseover = function(e) {
        let t = getEventTarget(e),
            n = t.closest("li");
        if (n) {
            let o = Array.from(n.closest("ul").children),
                l = o.indexOf(n) + 1;
            i.querySelector("li:nth-child(" + l + ") .nav-link").onclick = function() {
                r = i.querySelector(".moving-tab");
                let e = 0;
                if (i.classList.contains("flex-column")) {
                    for (var t = 1; t <= o.indexOf(n); t++) e += i.querySelector("li:nth-child(" + t + ")").offsetHeight;
                    r.style.transform = "translate3d(0px," + e + "px, 0px)", r.style.height = i.querySelector("li:nth-child(" + t + ")").offsetHeight
                } else {
                    for (t = 1; t <= o.indexOf(n); t++) e += i.querySelector("li:nth-child(" + t + ")").offsetWidth;
                    r.style.transform = "translate3d(" + e + "px, 0px, 0px)", r.style.width = i.querySelector("li:nth-child(" + l + ")").offsetWidth + "px"
                }
            }
        }
    }
}), window.addEventListener("resize", function(e) {
    total.forEach(function(o, e) {
        o.querySelector(".moving-tab").remove();
        var l = document.createElement("div"),
            n = o.querySelector(".nav-link.active").cloneNode();
        n.innerHTML = "-", l.classList.add("moving-tab", "position-absolute", "nav-link"), l.appendChild(n), o.appendChild(l), l.style.padding = "0px", l.style.transition = ".5s ease";
        let i = o.querySelector(".nav-link.active").parentElement;
        if (i) {
            let e = Array.from(i.closest("ul").children);
            n = e.indexOf(i) + 1;
            let t = 0;
            if (o.classList.contains("flex-column")) {
                for (var r = 1; r <= e.indexOf(i); r++) t += o.querySelector("li:nth-child(" + r + ")").offsetHeight;
                l.style.transform = "translate3d(0px," + t + "px, 0px)", l.style.width = o.querySelector("li:nth-child(" + n + ")").offsetWidth + "px", l.style.height = o.querySelector("li:nth-child(" + r + ")").offsetHeight
            } else {
                for (r = 1; r <= e.indexOf(i); r++) t += o.querySelector("li:nth-child(" + r + ")").offsetWidth;
                l.style.transform = "translate3d(" + t + "px, 0px, 0px)", l.style.width = o.querySelector("li:nth-child(" + n + ")").offsetWidth + "px"
            }
        }
    }), window.innerWidth < 991 ? total.forEach(function(e, t) {
        e.classList.contains("flex-column") || e.classList.add("flex-column", "on-resize")
    }) : total.forEach(function(e, t) {
        e.classList.contains("on-resize") && e.classList.remove("flex-column", "on-resize")
    })
// }), window.onload = function() {
}), setTimeout(function() {
    for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) e[t].addEventListener("focus", function(e) {        
        this.parentElement.classList.add("is-focused")
    }, !1), e[t].onkeyup = function(e) {
        "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled")
    }, e[t].addEventListener("focusout", function(e) {
        "" != this.value && this.parentElement.classList.add("is-filled"), this.parentElement.classList.remove("is-focused")
    }, !1);
    for (var o = document.querySelectorAll(".btn"), t = 0; t < o.length; t++) o[t].addEventListener("click", function(e) {
        var t = e.target,
            o = t.querySelector(".ripple");
        (o = document.createElement("span")).classList.add("ripple"), o.style.width = o.style.height = Math.max(t.offsetWidth, t.offsetHeight) + "px", t.appendChild(o), o.style.left = e.offsetX - o.offsetWidth / 2 + "px", o.style.top = e.offsetY - o.offsetHeight / 2 + "px", o.classList.add("ripple"), setTimeout(function() {
            o.parentElement.removeChild(o)
        }, 600)
    }, !1)
},100)
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map