var pin = prompt('Enter the required 6-digit pincode to be validated: ')
const pinRegex = RegExp('^ [0-9]{3}\\s{0,1}[0-9]{3} $')

function validatePincode(pin) {
    if (pincodeRegex.test(pin)) {
       console.log('Entered pincode is Valid!!')
    }
    else {
        throw ('Entered pincode is invalid!!')
    }
}
try {
    validatePincode(pin)
}
catch (e) {
    console.error(e)
}