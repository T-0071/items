

  jQuery(function($){
            $('.goods').gdsZoom({
                position:'right'
            });

            $('.smallList').on('click','img',function(){
                $('.goods img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                })
            })
        });

  