console.log(window.screen.availWidth);
const formatMonth = num => {
	let resalt = '';
	num < 10 ? resalt = `0${num + 1}` : num;
	return resalt

};
const addFormDate = () => {
	const inputDate  = document.querySelector('.form__item_date');
	const date = new Date();
	const month = formatMonth(date.getMonth());
	const day = date.getDate();
	const year = date.getFullYear();
	const resalt = `${year}-${month}-${day}`;
	inputDate.value = resalt;
};
addFormDate();

let selectHeader = document.getElementById('select-header');
let selectBodyItem = document.querySelectorAll('.select-body__item');

let selectHeaderOut = document.getElementById('select-header__out');


for (items of selectBodyItem) {
	items.addEventListener('click', (e) => {
		let text = e.target.innerText;
		selectHeaderOut.innerText = text


		selectHeader.classList.remove('isActiveSelect');
	})
}

selectHeader.addEventListener('click', () => {
	selectHeader.classList.toggle('isActiveSelect');
});