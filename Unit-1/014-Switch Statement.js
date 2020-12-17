let today = new Date().getDay();
let message;
switch (today) {
  case 0:
    message = "Sun";
    break;
  case 1:
    message = "Mon";
    break;
  case 2:
    message = "Tue";
    break;
  case 3:
    message = "Wed";
    break;
  case 4:
    message = "Thu";
    break;
  case 5:
    message = "Fri";
    break;
  case 6:
    message = "Sat";
    break;
  default:
    message = "Something Wrong!"
  }
  console.log(message);