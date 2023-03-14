// 将token存储到本地
let TokenKey = 'user_token'
let UserInfoKey = 'user_info'

// export function getToken() {
//   console.log(localStorage.getItem(TokenKey));
// }

export function setToken(token) {
  localStorage.setItem(TokenKey,token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey)
}

// export function getUserInfo() {
//   JSON.parse(localStorage.getItem(UserInfoKey))
// }

export function setUserInfo(userInfo) {
  localStorage.setItem(UserInfoKey,JSON.stringify(userInfo))
}

export function removeUserInfo() {
  localStorage.removeItem(UserInfoKey)
}