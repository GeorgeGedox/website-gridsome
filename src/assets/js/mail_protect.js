export default class _mailProtect {
    static encodeEmail(email, key) {
        let encodedKey = key.toString(16)
        let encodedString = this.make2DigitsLong(encodedKey);

        for(let n=0; n < email.length; n++) {
            let charCode = email.charCodeAt(n);
            let encoded = charCode ^ key;
            let value = encoded.toString(16);

            encodedString += this.make2DigitsLong(value);
        }
        return encodedString;
    }

    static make2DigitsLong(value){
        return value.length === 1
            ? '0' + value
            : value;
    }

    static decodeEmail(encodedString) {
        let email = "";
        let keyInHex = encodedString.substr(0, 2);
        let key = parseInt(keyInHex, 16);

        for (let n = 2; n < encodedString.length; n += 2) {
            let charInHex = encodedString.substr(n, 2)
            let char = parseInt(charInHex, 16);
            let output = char ^ key;

            email += String.fromCharCode(output);
        }
        return email;
    }

}