function timeInWords(h, m) {
    let w = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
             "eleven","twelve","thirteen","fourteen","quarter","sixteen","seventeen",
             "eighteen","nineteen","twenty","twenty one","twenty two","twenty three",
             "twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine"];

    let result = "";

    if (m == 0) {
        result = w[h] + " o' clock";
    } else if (m == 15) {
        result = "quarter past " + w[h];
    } else if (m == 30) {
        result = "half past " + w[h];
    } else if (m == 45) {
        result = "quarter to " + w[h + 1];
    } else if (m < 30) {
        if (m == 1) {
            result = w[m] + " minute past " + w[h];
        } else {
            result = w[m] + " minutes past " + w[h];
        }
    } else {
        if (60 - m == 1) {
            result = w[60 - m] + " minute to " + w[h + 1];
        } else {
            result = w[60 - m] + " minutes to " + w[h + 1];
        }
    }

    return result;
}
