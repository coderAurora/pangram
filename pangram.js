
export const isPangram = (sentence) => {
    // state regex for filter
    const regex = /[a-z]/;

    // define alphabet for comparison and turn it into an array
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcArr = Object.values(abc);

    // get rid of all spaces then turn sentence into an array
    sentence = sentence.toLowerCase();
    let sentenceArray = Object.values(sentence);

    // filter duplicate letters in sentence array
    let uniqueArr = sentenceArray.filter( (letter, index, array) => {
        return array.indexOf(letter) === index;
    })

    // filter out anything that isn't a letter
    let lettersOnlyArr = uniqueArr.filter(letter => {
        return regex.test(letter) ? letter:false;
    })

    let count = abc.length;
    for (let i = 0; i < lettersOnlyArr.length; i++) {
        console.log(i);
        for (let j = 0; j < abcArr.length; j++) {
            if (lettersOnlyArr[i] === abcArr[j]){
                count--;
            }
        }
    }
    return count === 0;

}
