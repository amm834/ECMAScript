let password = 'amm834';
let inputPass;
do {
   inputPass = prompt("Enter Password");
  inputPass === password ? alert('Loged In!'): alert('Invalid!');
}while (password != inputPass);