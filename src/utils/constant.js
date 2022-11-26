export const MOVIES_OPTIONS = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MAIN_OPTIONS = {
  baseUrl: "https://api.movies.ilya.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
};

export const ERROR_MESSAGE_EMAIL = "Некорректный E-mail"
export const DEFAULT_ERROR_MESSAGE_PASSWORD = "Введите данные в указанном формате."
export const ERROR_MESSAGE_PASSWORD =
  "Длинна пароля от 6 до 12 символов, пароль должен содержать хотя бы одно число," +
  " хотя бы одну заглавную букву, хотя бы одну строчную букву."
export const PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,12}$"
export const NAME_PATTERN = "^[A-Za-z -]+$"
export const ERROR_MESSAGE_NAME = "Имя может содержать только латиницу, кириллицу, пробел или дефис."
