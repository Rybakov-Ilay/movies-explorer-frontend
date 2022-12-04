![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)


# Дипломный проект Movies. Frontend.

- [Ссылка на pull-request](https://github.com/Rybakov-Ilay/movies-explorer-frontend/pull/2)
- [Ссылка на макет Figma](https://disk.yandex.ru/d/T3wwHk-R2IPkhA)
- [Проект развернут в Яндекс.Облаке](https://movies.ilya.nomoredomains.icu/)

## Описание

Проект представляет собой портфолио из проектов, которые были реализованы в течение всего курса обучения и
сервиса [Movies](https://movies.ilya.nomoredomains.icu/).

## Что такое [Movies](https://movies.ilya.nomoredomains.icu/)?

Это сервис по поиску фильмов. Понравившиеся фильмы можно сохранять и они будут сразу доступны при загрузке сервиса на
странице "Сохранённые фильмы". Здесь перечисленны основные возможности сервиса Movies:

- Для входа в сервис нужно авторизироваться.
- Формы регистрации и авторизации имеют кастомную валидацию полей.
- Есть возможность редактирования своего профиля.
- Сервис использует локальное хранилище для хранения пользовательских данных, что позволяет при повторном посещении
  брать начальные данные не обращаясь к серверу.
- До получения ответа от сервера после поиска будет крутиться прелоадер.
- Роуты /saved-movies, /profile и /movies авторизацией.
- Если фильмов после поиска больше 5 (для разных ширин экрана это цифра своя), под ними появляется кнопка «Ещё». По нажатию отрисовываются ещё 2 (для разных ширин экрана это цифра своя), а кнопка сдвигается
  ниже, чтобы оказаться под блоком с фильмами.
- Сервис сверстан по [макету](https://disk.yandex.ru/d/T3wwHk-R2IPkhA) в Figma.
- Применена адаптивная и отзывчивая верстка.
- Проект развернут на сервере Я.Облаке.
- API проекта хранится на отдельном поддомене.
- Подключено шифрование данных.(получен SSL-сертификат).
- Статичные файлы раздаются через сервер Nginx.
- Настроены сложные CORS-запросы.
- База данных для поиска фильма содержит всего 100 фильмов(и не очень популярных). Поэтому поиск, как нам кажется, популярного фильма может часто оказываться неудачей, в прочем так это учебный проект - это не главное.



