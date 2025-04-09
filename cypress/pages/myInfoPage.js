class MyInfoPage {


   selectorsList() {

        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",

        }

        return selectors
    }

    fillPersonaldeDetails(fristName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(fristName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear({ force: true}).type(expiryDate)
        cy.get(this.selectorsList().submitButton).click({ force: true})

    }

    saveForm(){
        cy.get(this.selectorsList.submitButton).eq(0).click({ force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get('.oxd-toast-close').should('be.visible').click()
    
    }  
    
    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }

}

export default MyInfoPage