/**
 * Validate IP Address

Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false

Constraints:

    [time limit] 5000ms
    [input] string ip
    [output] boolean

edge case:
"X.X.X.X"

- ""
- "abc.1.2.3"
- "1.1.1"
- "001.2.3.4" 

if is empty return false

split ip

ip.length !== 4 return false

loop i=0 to ip.length
 if ! (ip[i] is 0 to 255) return false
 if ! (ip[i] is number) return false
 if ip[i].at(0) is 0 && ip[i].length >= 2 return false 

 TC O(n)
 SC O(n)
 */

export {};
function validateIP(ip: string) {
  if (ip === '') {
    return false;
  }
  let ipS = ip.split('.'); // ["1", "12", "1", "1"];

  if (ipS.length !== 4) {
    return false;
  }

  for (let i = 0; i < ipS.length; i++) {
    const val: string = ipS[i];
    if (!(parseInt(val) >= 0 && parseInt(val) <= 255)) {
      return false;
    }
    if (!(typeof parseInt(val) === 'number')) {
      return false;
    }
    if (val.at(0) === '0' && val.length >= 2) {
      return false;
    }
  }

  return true;
}

// debug your code below
console.log(validateIP('192.168.0.1')); // T
console.log(validateIP('')); // F
console.log(validateIP('ac.168.0.1')); // F
console.log(validateIP('001.168.0.1')); // F
