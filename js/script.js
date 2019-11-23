$(function () {

    //salva os objetos do DOM como variáveis
    let container = $('#container');
    let biro = $('#biro');
    let pole = $('.pole');
    let pole2 = $('.pole2');
    let pole_1 = $('#pole_1');
    let pole_2 = $('#pole_2');
    let pole_3 = $('#pole_3');
    let pole_4 = $('#pole_4');
    let score = $('#score');
    let speed_span = $('#speed');
    let restart_btn = $('#restart_btn');

    //define a configuração inicial do jogo
    let container_width = parseInt(container.width());
    let container_height = parseInt(container.height());
    let pole_initial_position = parseInt(pole.css('right'));
    let pole_initial_height = parseInt(pole.css('height'));
    let pole_initial_position2 = parseInt(pole2.css('right'));
    let pole_initial_height2 = parseInt(pole2.css('height'));
    let biro_left = parseInt(biro.css('left'));
    let biro_height = parseInt(biro.height());
    let speed = 5;
    let go_up = false;
    let score_updated = false;
    let game_over = false;


    let the_game = setInterval(function () {

        if (collision(biro, pole_1) || collision(biro, pole_2) || collision(biro, pole_3) || collision(biro, pole_4) || 
            parseInt(biro.css('top')) <= 0 || parseInt(biro.css('top')) > container_height - biro_height) {

            stop_the_game();

        } else {

            let pole_current_position = parseInt(pole.css('right'));
            let pole_current_position2 = parseInt(pole2.css('right'));

            //update the score when the poles have passed the bird successfully
            if (pole_current_position > container_width - biro_left || pole_current_position2 > container_width - biro_left) {
                if (score_updated === false) {
                    score.text(parseInt(score.text()) + 1);
                    score_updated = true;
                }
            }

            //check whether the poles went out of the container
            if (pole_current_position > container_width) {
                //Novos tamanhos das barras
                let new_height = parseInt(Math.random() * 100);
                // do{
                //     let new_height2 = parseInt(Math.random() * 200);
                // } while (new_height <= (new_height2 + 100))
                         
                //change the pole's height
                //Um acrescenta o novo valor aleatorio e o outro subtrai pra manter a mesma distancia pro boneco passa
                pole_1.css('height', pole_initial_height + new_height);
                pole_2.css('height', pole_initial_height - new_height);
                
                //increase speed
                speed = speed + 1;
                speed_span.text(speed);

                score_updated = false;

                //quando chega no limite do container volta ao começo
                pole_current_position = pole_initial_position;
                
            }

             if (pole_current_position2 > container_width) {
                let new_height2 = parseInt(Math.random() * 100);
                         
                //change the pole's height
                //Um acrescenta o novo valor aleatorio e o outro subtrai pra manter a mesma distancia pro boneco passa
                pole_3.css('height', pole_initial_height2 + new_height2);
                pole_4.css('height', pole_initial_height2 - new_height2);

                //increase speed
                speed = speed + 1;
                speed_span.text(speed);

                score_updated = false;

                //quando chega no limite do container volta ao começo
                pole_current_position2 = pole_initial_position2;
            }

            //move the poles
            pole.css('right', pole_current_position + speed);
            pole2.css('right', pole_current_position2 + speed);

            if (go_up === false) {
                go_down();
            }
        }

    }, 40);

    $(document).on('keydown', function (e) {
        let key = e.keyCode;
        if (key === 32 && go_up === false && game_over === false) {
            go_up = setInterval(up, 50);
        }
    });

    //Exemplo pra tentar trocar o teclado pelo mouse
    // $(document).mousemove(function(e) {
    //     $('.logo').offset({
    //         left: e.pageX,
    //         top: e.pageY + 20
    //     });
    // });

    $(document).on('keyup', function (e) {
        let key = e.keyCode;
        if (key === 32) {
            clearInterval(go_up);
            go_up = false;
        }
    });


    function go_down() {
        biro.css('top', parseInt(biro.css('top')) + 5);
    }

    function up() {
        biro.css('top', parseInt(biro.css('top')) - 10);
    }

    function stop_the_game() {
        clearInterval(the_game);
        game_over = true;
        restart_btn.slideDown();
    }

    restart_btn.click(function () {
        location.reload();
    });

    function collision($div1, $div2) {
        let x1 = $div1.offset().left;
        let y1 = $div1.offset().top;
        let h1 = $div1.outerHeight(true);
        let w1 = $div1.outerWidth(true);
        let b1 = y1 + h1;
        let r1 = x1 + w1;
        let x2 = $div2.offset().left;
        let y2 = $div2.offset().top;
        let h2 = $div2.outerHeight(true);
        let w2 = $div2.outerWidth(true);
        let b2 = y2 + h2;
        let r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

});
