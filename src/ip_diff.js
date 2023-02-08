const ipStringHandler = (ip) => ip.split('.').map(ip => parseInt(ip))

module.exports = {
    ipDiff(a, b) {
        if (a === b) {
            return 0
        }
        console.log(ipStringHandler(a))
    }
}