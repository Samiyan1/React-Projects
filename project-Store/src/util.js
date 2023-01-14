export default function priceFormatCurrency (num){
    return Number(num.toFixed(3)).toLocaleString() + ' تومان'
}