
let records = JSON.parse(localStorage.getItem("localdata2")) || [];

const renderTable = () => {

    document.getElementById('tablebody2').innerHTML = records.map((item, index) => {
        return (
            `<tr>
            <td>${item.firstname}</td>
            <td>${item.userEmail}</td>
            <td>${item.date}</td>
            <td>${item.username}</td>
            <td>${item.pass}</td>
            <td>${item.age}</td>
            <td>${item.zipcode}</td>
            <td>${item.address}</td>
            <td>${item.userCity}</td>
            <td>${item.course}</td>
            `
        )
    }).join('')
}
renderTable();

function validateForm() {
    let fullname = document.getElementById("fname").value;
    console.log(fullname);

    let email = document.getElementById("email").value;
    console.log(email);

    let birthdate = document.getElementById("bdate").value;
    console.log(birthdate);

    let uesrname = document.getElementById("uesrname").value;
    console.log(uesrname);

    let password = document.getElementById("password").value;
    console.log(password);

    let age = document.getElementById("age").value;
    console.log(age);

    let zipcode = document.getElementById("zipcode").value;
    console.log(zipcode);

    let address = document.getElementById("address").value;
    console.log(address);

    let city = document.getElementById("city").value;
    console.log(city);

    let course = document.getElementById("course").value;
    console.log(course);

    let person = { firstname: fullname, userEmail: email, date: birthdate, username: uesrname, pass: password, age: age, zipcode: zipcode, address: address, userCity: city, course: course }
    console.log(person);

    records.push(person);
    localStorage.setItem("localdata2", JSON.stringify(records))
    console.log(records);

    renderTable();

}