type="text/javascript"
    let array = new Array(
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
    );
    let delay = 2000;
    function imageRotator(i){
        let image = document.getElementById("rotator");
        image.src = array[i];
        i++;
        if (i==array.length) i=0;
        setTimeout("imageRotator("+i+")",delay);
    }
