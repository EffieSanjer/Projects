
  //progress_bar
  var bar = document.querySelector('#pone'),
                                numberTop_bar = bar.getBoundingClientRect().top,
                                start = +bar.innerHTML, end = +bar.dataset.max;

                            window.addEventListener('scroll', function onScroll() {
                                if (window.pageYOffset > numberTop_bar - window.innerHeight / 2) {
                                    this.removeEventListener('scroll', onScroll);

                                    var elem = document.getElementById("pone");
                                    var width = 30;
                                    var endwidth = 100;
                                    var id = setInterval(frame_bar, 20);
                                    function frame_bar() {
                                        if (width >= endwidth) {
                                            clearInterval(id);
                                        } else {
                                            width++;
                                            elem.style.width = width + '%';
                                            elem.innerHTML = 334 + ' земли';
                                        }
                                    }

                                }
                            });
  