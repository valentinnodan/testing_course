function greet(name) {
    if (name === '') {
        return 'Hello, guest!'
    }
    return `Hello, ${name}!`
}

module.exports = greet;