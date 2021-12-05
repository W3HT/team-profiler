const Intern = require('../lib/Intern.js')

// test for setting school  
test('test for setting school', () => {
    const newIntern = new Intern( 'John', '2', 'john@gmail.com', 'ITT' ) 
    expect( newIntern.school).toBe('ITT')
}) 

// test for getting school
test('test for getting school', () => {
    const newIntern = new Intern( 'John', '2', 'john@gmail.com', 'ITT' ) 
    expect( newIntern.getSchool()).toBe('ITT')
})

// test for getting role
test('test for getting role', () => {
    const newIntern = new Intern( 'John', '2', 'ITT' ) 
    expect( newIntern.getRole()).toBe('Intern')
})
