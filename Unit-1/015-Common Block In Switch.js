/**
* Algorithm
* If Sun and Sat -> Week End :3
* If Thu and Fri -> Near To Holiday
* If Mon , Tue and Wed -> Wait Week End
* */

let today = new Date().getDay();
let message;
switch (today) {
  case 6:
    case 0:
      message = "WeedEnd :3";
      break;
    case 4:
      case 5:
        message = "Neary To Rest!";
        break;
      default:
        message = "Wait WeedEnd";
        break;
  }
  console.log(message);