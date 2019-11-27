$(function () {

 let $nome = $('#nome');
 let $rules = $('#rules');
 let $play = $('#play');
 let $biroimage = $('#biro-image');

	$(nome).drawText({
  		fillStyle: '#000',
  		strokeStyle: '#ff0',
  		strokeWidth: 12,
  		x: 400, y: 160,
  		fontSize: 120,
  		fontFamily: 'Helvetica, sans-serif',
  		text: 'B I R O B I R D'
	});

	$(biroimage).drawImage({
  		source: './img/bird.png',
  		x: 100, y: 100,
  		scale: 0.3
	});

    $(play).drawArc({
  		fillStyle: '#ff0',
  		x: 100, y: 100,
  		radius: 80
	});

	$(play).drawVector({
		strokeStyle: '#000',
  		strokeWidth: 20,
  		rounded: true,
  		endArrow: true,
  		arrowRadius: 15,
  		arrowAngle: 90,
  		x: 60, y: 90,
  		a1: 90, l1: 70
	});

	$(play).drawText({
  		fillStyle: '#ff0',
  		strokeStyle: '#000',
  		strokeWidth: 2,
  		x: 100, y: 140,
  		fontSize: 20,
  		fontFamily: 'Helvetica, sans-serif',
  		text: 'JOGAR'
	});

	$(rules).drawArc({
  		fillStyle: '#ff0',
  		x: 100, y: 100,
  		radius: 80
	});

	$(rules).drawRect({
  		fillStyle: '#000',
  		x: 100, y: 90,
  		width: 50, height: 40
	});

	$(rules).drawText({
  		fillStyle: '#ff0',
  		strokeStyle: '#000',
  		strokeWidth: 2,
  		x: 100, y: 140,
  		fontSize: 20,
  		fontFamily: 'Helvetica, sans-serif',
  		text: 'REGRAS'
	});

});