/*section-left*/
               var index = 1;
                function changeImage() {
                    var images = ["../IMG/2.jpeg", "../IMG/3.jpeg", "../IMG/4.jpeg"];
                    document.getElementById('image').src = images[index];
                    index++;
                    if(index == images.length) {
                        index = 0;
                    }
                }
                  setInterval(changeImage,1000);
