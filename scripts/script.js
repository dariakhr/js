var name = prompt("Введите ваше имя");
var surname = prompt("Введите вашу фамилию:");
var number = prompt("Введите ваш номер телефона:");
var city = prompt("Ваш город:");
var street = prompt("Введите  название улицы:");
var home = prompt("№ дома:");
var apartament = prompt("№ квартиры:");
var money = prompt("Сумма вклада:");
var procent = prompt("Желаемый процент(в месяц):")
var time = prompt("Срок вклада(в месяцах):");
alert ("Здравствуйте, " + name + surname + "\n" + "На номер телефона " + number + " и адрес г. " + city + " ул. " + street + ", дом №  " + home + ", кв. " + apartament + ", зарегестрирован счет на сумму: " + money + ", под" + procent + "%, на " + time + "месяцев." + "\n" + "Через " + time + "месяцев вы сможете забрать вклад, который будет равен:" + money(money/100*procent));
