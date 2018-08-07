import ajax from '../../utils/ajax'

export function fetchUserInfo() {
  return ajax({
    method: 'get',
    url: '/src/mock/permissions.json'
  })
}
