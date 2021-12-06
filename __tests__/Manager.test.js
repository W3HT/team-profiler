const Managers = require('../lib/Manager.js')

// test for setting officeNumber  
test('test for setting officeNumber', () => {
    const newManagers = new Managers( 'John', '2', 'john@gmail.com', '105' ) 
    expect( newManagers.officeNumber).toBe('105')
}) 

// test for getting officeNumber
test('test for getting officeNumber', () => {
    const newManagers = new Managers( 'John', '2', 'john@gmail.com', '105' ) 
    expect( newManagers.getOfficeNumber()).toBe('105')
})

// test for getting role
test('test for getting role', () => {
    const newManagers = new Managers( 'John', '2', 'john@gmail.com', '105' ) 
    expect( newManagers.getRole()).toBe('Manager')
})