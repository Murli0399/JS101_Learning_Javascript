// username & password are stored in data base

let db_username = "murlikhaire28@gmail.com";
let db_password = "12345678";

// for login

let uname = "murlikhaire28@gmail.com";
let pass = "12345678";

if (db_username == uname) {
  if (db_password == pass) {
    console.log("Login Successful")
  }
  else {
    console.log("Password is Incorrect");
  }
}
else {
  console.log("User Name is not Register");
}