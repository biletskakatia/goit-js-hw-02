function getShippingCost(country) {
    let resualt;
    switch (country) {
        case 'China' :
            resualt = "Shipping China to  will cost 100 credits";
            break;
        case 'Chile':
            resualt = "Shipping Chile to  will cost 250 credits";
            break;
        case 'Australia':
            resualt = "Shipping Australia to  will cost 170 credits";
            break;
        case 'Jamaica':
            resualt = "Shipping Jamaica to  will cost 120 credits";
            break;
        default:
            resualt = "Sorry, there is no delivery to your country";
            break;
    }
    return resualt;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"