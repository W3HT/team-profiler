const { test } = require('@jest/globals')
const Employee = require('../lib/Employee.js')

// test for instantiating employee instance
test('test for instantiating employee instance', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( typeof(newEmployee)).toBe('object')
}) 

// test for setting a name
test('test for setting a name', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.name).toBe('John')
}) 

// test for setting an id
test('test for setting an id', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.id).toBe('2')
}) 

// test for setting an email
test('test for setting an email', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.email).toBe('john@gmail.com')
}) 

// test for getting a name
test('test for getting a name', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.getName()).toBe('John')
}) 
// test for getting id
test('test for getting id', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.getId()).toBe('2')
}) 
// test for getting email
test('test for getting email', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.getEmail()).toBe('john@gmail.com')
}) 
// test for getting role
test('test for getting role', () => {
    const newEmployee = new Employee( 'John', '2', 'john@gmail.com' ) 
    expect( newEmployee.getRole()).toBe('Employee')
}) 
