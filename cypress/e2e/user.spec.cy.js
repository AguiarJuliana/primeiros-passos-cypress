import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPages'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-mm-dd']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']"
       
  }

  it.only('User Info update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Nickname')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear({force: true}).type('2025-03-10')
  
    

  })
  it('Login - Fail',() => {
   // cy.visit('/auth/login')
   // cy.get(selectorsList.usernameField).type(userData.userFail.username)
   // cy.get(selectorsList.passwordField).type(userData.userFail.password)
   //cy.get(selectorsList.loginButton).click()
  //cy.get(selectorsList.WrongCredentialAlert)
  })
})
