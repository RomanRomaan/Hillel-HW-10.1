// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

const userData = {
    name: 'Jon',
    age: 35,
    cityOfLiving: "LA",

    showInfo() {
        return (`Your name is ${this.name}, your age is ${this.age}, your city is ${this.cityOfLiving}`)
    }
}


console.log(userData.showInfo())