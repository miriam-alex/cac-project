Raphael(function () {
    var hldr = document.getElementById("holder1"),
        text = hldr.innerText.replace(/^\s+|\s+$/g, "");
    hldr.innerHTML = "";
    var R = Raphael("holder1", window.innerWidth-50, window.innerHeight-100),
        txt = [],
        attr = {font: "50px Helvetica", opacity: 0.5};


    var mouse = null, rot = 0;
    var count =0;
    var img = 0;
    var st = R.set();

    
    var imageArray = ["P2L1.png", "P2L2.png","P2L3.png", "P2L4.png"];

    var widthArray = [750, 1252, 500,1382];
    var heightArray = [100, 98, 114,168];

    document.onmousemove = function (e){
        e = e || event;

        count=count+1;
        if (mouse == null) {
            mouse = e.clientX;
            return;
        }
        if (count%10!=0)
        {
          return;
        }
        rot += e.clientX - mouse;

        // array of images
        var numArray = imageArray.length;

        // getting random x coordinates
        var x ;

        // getting random y coordinates
        var y;

        // getting random  sizes
        // var h = Math.floor(random*500+50);
        // var w = Math.floor(random*500+50);
        // var v = R.rect(x,y,h,w);
        var v;


        //var k=Math.floor(Math.random()*imageArray.length)%imageArray.length;

        if (img < imageArray.length) {
          h = heightArray[img];
          w = widthArray[img];

          x = Math.floor(Math.random()*(window.innerWidth-(200+w)));
          y = Math.floor(Math.random()*(window.innerHeight-(200+h)));
          v = R.image(imageArray[img], x, y, w, h);
          v.attr({fill: "#0f0"});
          txt.push(v);
          st.push(v);
          //img = img % imageArray.length;
          //console.log("Add image",imageArray[img],x,y,h,w,window.innerWidth,window.innerHeight);
        }

        var holder = document.getElementById("placeholder");
        //console.log(img);
        // when the images in the array finish
        //console.log("Fading",img)

        if (img > (imageArray.length)){
          // fade into black


          st.animate({ opacity : 0 }, 1000, function () {
            this.hide();
            $("#placeholder").empty();
            var v = $("<button>");
            v.html("click here");
            v.click(function(){location.href="stage2.html";});
            $("#placeholder").append(v);
            console.log("animation done");
          });

          // go to next html page
        }




        img = img +1;


        mouse = e.pageX;
        R.safari();
    } ;
});
