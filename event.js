const Events = require('events');
const event = new Events()
function confirmEmail(user) {
    console.log('Sending Confirmation Mail to ' + user.email)
}
event.on('User-Created', confirmEmail)
event.emit('User-Created', {name: "Olatunji", email: "temitope@gmail.com"})
// event.emit('User-Created')
// event.emit('User-Created')
// console.log(Events)