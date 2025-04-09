import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPages'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonaldeDetails('Frist Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', 'Drivers Number', '2025-29-07')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  it('Login - Fail',() => {
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkAccessInvalid()
  })
})
