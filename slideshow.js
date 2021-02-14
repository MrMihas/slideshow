
let photos = document.querySelector(".photos");
let images = document.querySelectorAll(".photos > img");

let lay = document.querySelector('.lay');
let close = document.querySelector('.close');

let modal = document.querySelector('.modal');
let modalImg = document.querySelector('.modal  img');
let arrow = document.querySelector('.arrow');
let next = document.querySelector('.arrow .next' );
let prev = document.querySelector('.arrow .prev');

let counter = 0;
let arr =[];



// перебор фото и добавляем слушатель клика, получаем data-set фотки вызов ф-и формирования модалки
images.forEach(slide =>{

	++counter;
	arr.push(slide.getAttribute('src')); // получаем массыв путей фотографии
	slide.setAttribute('data-set', counter - 1 ); //присваем data-set для каждой фотографии

	slide.addEventListener('click', function(e){
		e.preventDefault;
		let posElem = +slide.getAttribute('data-set');
		modalBox(posElem);
		
	});
});

// формирование модального окна
function modalBox(posElem){
	lay.classList.add('bg');
		close.style.display = "block";
		modal.style.display = "block";

		modalImg.setAttribute('src', arr[posElem]);  // получаем фото из массива по индексу
        
		modalImg.style.opacity = '1';
		arrow.style.display = "block";
		
			
			// кнопка вперед парамтр позиции
				next.addEventListener('click', function(e){
						e.preventDefault;
						posElem++;
					if(posElem > arr.length -1){// если последняя, то сначала
						posElem = 0;
					}
					photoIndex(posElem);// вызов ф-и типа коллбэк
					});
	

	// кнопка назад (парамтр) позиции
			prev.addEventListener('click', function(e){
					e.preventDefault;
					posElem--;
				if(posElem == -1){ // если первая, то сконца
					return posElem = arr.length;
				}
				photoIndex(posElem); // вызов ф-и типа коллбэк
				});
}


//типа коллбэк
function photoIndex(posElem) {
	modalImg.setAttribute('src', arr[posElem]);  // получаем фото из массива по индексу
}
		



// закрываем модалку
lay.addEventListener('click', closed);
close.addEventListener('click', closed);
modal.addEventListener('click', closed);

function closed(){
		lay.classList.remove('bg');
		close.style.display = "none";
		modal.style.display = "none";
		modalImg.removeAttribute('src');
		arrow.style.display = "none";
}
