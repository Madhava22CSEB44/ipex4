var str1=prompt("enter the string 1 :")
var str2=prompt("enter string 2 :")
function isanagram(str1,str2)
{
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    if (str1.length !== str2.length) {
    return false
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    return str1 === str2
}

const check = isanagram(str1, str2)
console.log(check)
