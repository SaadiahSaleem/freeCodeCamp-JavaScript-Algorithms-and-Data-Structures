function testLogicalOr(val) {
    // Only change code below this line

    if (val>=0 && val<10 || val>12 && val>20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);