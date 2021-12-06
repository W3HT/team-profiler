const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')


// test for setting github
test('test for setting github', () => {
    const newEngineer = new Engineer( 'John', '2', 'john@gmail.com', 'johnsHub' ) 
    expect( newEngineer.github).toBe('johnsHub')
}) 

// test for getting github
test('test for getting github', () => {
    const newEngineer = new Engineer( 'John', '2', 'john@gmail.com', 'johnsHub' ) 
    expect( newEngineer.getGithub()).toBe('johnsHub')
})

// test for getting role
test('test for getting role', () => {
    const newEngineer = new Engineer( 'John', '2', 'john@gmail.com' ) 
    expect( newEngineer.getRole()).toBe('Engineer')
})