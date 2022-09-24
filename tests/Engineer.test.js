const Engineer = require('../lib/engineer')

// Establish test employee, subclass engineer
var employee;
beforeEach(() => {
    employee = new Engineer("John Doe", 12345, 'john.doe@fakemail.com', 'johndoe')
})

// Test constructor
test('Creates an object', () => {
    expect(typeof employee).toBe("object")
})


// Test property assignment
test('Object has name property set correctly', () => {
    expect(employee.name).toEqual('John Doe');
})

test('Object has ID property set correctly', () => {
    expect(employee.id).toEqual(12345);
})

test('Object has email property set correctly', () => {
    expect(employee.email).toEqual('john.doe@fakemail.com')
})

test('Object has github property set correctly', () => {
    expect(employee.github).toEqual('johndoe')
})


// Test methods
test('getName method returns employee name', () => {
    expect(employee.getName()).toEqual("John Doe");
})

test('getID method returns employee ID', () => {
    expect(employee.getID()).toEqual(12345);
})

test('getEmail method returns employee email', () => {
    expect(employee.getEmail()).toEqual('john.doe@fakemail.com');
})

test('getRole method returns "Engineer"', () => {
    expect(employee.getRole()).toEqual("Engineer")
})

test('getGithub method returns link to username profile', () => {
    expect(employee.getGithub()).toEqual('https://github.com/johndoe');
})