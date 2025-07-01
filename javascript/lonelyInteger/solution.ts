function lonelyinteger(a: number[]): number {
    const seen = new Map<number, boolean>();

    for (const num of a) {
        if (seen.has(num)) {
            seen.delete(num);
        } else {
            seen.set(num, true);
        }
    }

    return seen.keys().next().value || 0;
}
console.log(lonelyinteger([1,2,3,4,3,2,1]));