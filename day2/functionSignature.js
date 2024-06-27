var runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    // 9는 10보다 크지 않기 때문에 실행되지 않음
    return false;
};
console.log(runner(9));
