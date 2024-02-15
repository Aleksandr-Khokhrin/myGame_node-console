# myGame_node-console
![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/8fe8d038-b924-4306-b112-61a35d0786a0)

Описание:
В этом репозитории представленна игра, что-то вроде "Камень, Ножницы, Бумага". Игра написана на NodeJS и реализована в консоли. 

Правила:
Пользователь вводит в терминале обязательные первые два слова "node game" и затем после пробела вводит через пробел нечетное колличество любых слов. 
Логика приложения принимает эти слова за варианты, с помощью которых создаются комбинации. Затем вариант выбранный пользователем сравнивается с вариантом (предварительно) выбранным компьютером и выдаётся результат.
Меню с выбором вариантов дальнейших действий (выбор варианта для дальнейшей игры, помощь и выход):

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/e04fa67d-08bd-4fc2-b792-c5e7c6806579)

Результат игры: 

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/9b5286ab-f069-4656-8aa4-fbd816cf4840)

Обратите внимание, что в результатах выдаётся "HMAC key", для того, чтобы можно было проверить честность в вынесении ответа. 
Основной смысл заключается в том, что компьютер всегда делает ход перед пользователем.

Также, выбрав команду "help", можно посмотреть таблицу всех вариантов:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/0809d3bf-038e-4283-a77c-ab8e80ace671)

Логика задачи:
- Инициализация переменных и проверка аргументов командной строки:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/3af9a473-d991-445b-8975-e50cc1094e30)

- Генерация случайного хода компьютера и вычисление HMAC:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/20a9573c-2b72-4223-a768-dad2171a6ae3)

- Вывод HMAC и доступные ходы:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/560f5276-b200-4620-aba6-38e6b96334f9)

- Функция ввода хода пользователя:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/ed305a37-d8a6-4a87-a945-e9cbe7959f48)

- Обработка пользовательского ввода и определение результатов игры:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/c4ec7541-2fc9-4170-b892-82267ae081f6)

- Вывод результатов игры и возможность продолжения игры или вывода таблицы:

![image](https://github.com/Aleksandr-Khokhrin/myGame_node-console/assets/147053338/4b82a13f-5484-4609-b816-6f514d3ac70b)

Инструменты:
1. crypto (для хеширования и создания HMAC key).
2. cli-table (для создания таблицы со всеми вариантами).

Вывод:
1. Подобные задачи хорошо помагают в практическом освоении NodeJS на начальных этапах.

![image](https://github.com/Aleksandr-Khokhrin/MyForumApp_react-front/assets/147053338/d1421d97-c486-45f4-b34f-5faede758ca4)




