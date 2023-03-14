import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

// 注册
export function logon(data) {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}

// 发送验证码
export function sendYZM(data) {
  return request({
    url: '/sms_mail',
    method: 'POST',
    data
  })
}

// 获取用户信息
export function GetUserInfo(data) {
  return request({
    url: 'user/info',
    method: 'GET',
    data
  })
}

// 充值币种列表
export function getFixAddress(data) {
  return request({
    url: '/wallet/get_fix_address',
    method: 'POST',
    data
  })
}

// 充值列表
export function getRechargeList(data) {
  return request({
    url: 'charge_mention/log_in',
    method: 'GET',
    data
  })
}
