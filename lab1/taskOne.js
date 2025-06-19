function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function formatFullName(firstName, lastName){
    if (firstName == null || lastName == null || firstName == "" || lastName == "") {
        return 'Invalid name input';
    }
    firstName = capitalizeFirstLetter(firstName);
    lastName = capitalizeFirstLetter(lastName);
    const formatName = `${lastName}, ${firstName}`;
    return formatName;
}

console.log(formatFullName("John","")); // Output: Doe, John