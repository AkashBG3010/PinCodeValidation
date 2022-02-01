var pincode = prompt('Enter the required 6-digit pincode to be validated: ')
const pincodeRegex = RegExp(' ^ [0-9]{6}$')

try {
if (pincodeRegex.test(pincode)) {
    console.log('Entered pincode is Valid!!')
}
else {
    console.org0('Entered pincode is invalid!!')
}
}
catch (e) {
    console.error(e)
}