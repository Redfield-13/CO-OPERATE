var images = ["./asset/img/comparto-image-01.jpg","./asset/img/gallery-item-04.jpg","./asset/img/gallery-item-05.jpg"]
var show = document.getElementById("show")
var pos = 0



var left = document.getElementById('left')
var right  = document.getElementById('right')
show.src = images[pos]
right.addEventListener('click',function(){
    pos = pos+1
    if (pos == images.length) {
        pos = 0
        show.src = images[pos]
    }
    else{
        
    show.src = images[pos]
    }
})

left.addEventListener('click',function(){
    pos = pos-1
    if (pos == -1) {
        pos = images.length-1
        show.src = images[pos]
    }
    else{
        show.src = images[pos]
    }
    
})

var hg  = document.getElementById('body').clientHeight

var footer = document.getElementById('footer')

footer.style.top = "1905px"

