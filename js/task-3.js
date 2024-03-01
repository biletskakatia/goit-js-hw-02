const Word1 = 'spam';
const Word2 = 'sale';
function checkForSpam(message) {
    const normalizeStr = message.toLowerCase();
    const hasword1 = normalizeStr.includes(Word1);
    const hasword2 = normalizeStr.includes(Word2);

    if (hasword1 || hasword2) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true