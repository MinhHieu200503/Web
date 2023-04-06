/*section-left*/
               var index = 1;
                function changeImage() {
                    var images = ["../IMAGE/2.jpeg", "../IMAGE/3.jpeg", "../IMAGE/4.jpeg"];
                    document.getElementById('image').src = images[index];
                    index++;
                    if(index == images.length) {
                        index = 0;
                    }
                }
                  setInterval(changeImage,1000);
