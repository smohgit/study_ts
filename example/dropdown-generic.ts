// before generic
// const emails: {value: string; selected: boolean}[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// const numberOfProducts: {value: number; selected: boolean}[]  = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// // union type을 이용하여 string, number 둘다 되게 선언!
// function createDropdownItem(item: {value: string; selected: boolean} |  {value: number; selected: boolean}) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email); 
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// 여러 인터페이스 선언하게됨...
// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }
// const numberOfProducts: ProductNumber[]  = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem(item: Email | ProductNumber) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// after generic
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[]  = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>): HTMLOptionElement {
// function createDropdownItem(item: DropdownItem<string | number>): HTMLOptionElement {
function createDropdownItem<T>(item: DropdownItem<T>): HTMLOptionElement{
const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function(email: DropdownItem<string>): void {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});