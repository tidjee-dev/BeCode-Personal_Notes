/**=================================================================
 *                          Test Colors
 * =================================================================*/

const colors = require('colors');

const spacedStr = 'a z e r t y u i o p q s d f g h j k l m w x c v b n 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) _ + { } | [ ]';

// str = spacedStr without spaces
const str = 'azertyuiopqsdfghjklmwxcvbn1234567890!@#$%^&*()_+{}|[]';

console.log(colors.strip(str));
console.log(colors.stripColors(str));
console.log(colors.green(str));
console.log(colors.red(str));
console.log(colors.yellow(str));
console.log(colors.blue(str));
console.log(colors.magenta(str));
console.log(colors.cyan(str));
console.log(colors.white(str));
console.log(colors.gray(str));
console.log(colors.grey(str));
console.log(colors.black(str));
console.log(colors.bgRed(str));
console.log(colors.bgGreen(str));
console.log(colors.bgYellow(str));
console.log(colors.bgBlue(str));
console.log(colors.bgMagenta(str));
console.log(colors.bgCyan(str));
console.log(colors.bgWhite(str));
console.log(colors.reset(str));
console.log(colors.bold(str));
console.log(colors.dim(str));
console.log(colors.italic(str));
console.log(colors.underline(str + '\n'));
console.log(colors.inverse(str));
console.log(colors.hidden(str));
console.log(colors.strikethrough(str));
console.log(colors.rainbow(str));
console.log(colors.zebra(str));
console.log(colors.america(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.trap(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(colors.random(str));
console.log(str);
// console.clear();
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + colors.zalgo(str).random);
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n');
console.log(colors.zalgo(str).random + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');

// console.clear();

const SUCCESS = colors.green;
const INFO = colors.blue;
const WARNING = colors.yellow;
const ERROR = colors.red;
const ASK = colors.magenta;
const HINT = colors.dim;
const UNDERLINE = colors.underline;
const RESET = colors.reset;
const BOLD = colors.bold;
const ITALIC = colors.italic;
const INVERSE = colors.inverse;
const STRIKETHROUGH = colors.strikethrough;
const RAINBOW = colors.rainbow;
const ZEBRA = colors.zebra;
const AMERICA = colors.america;
const TRAP = colors.trap;
const RANDOM = colors.random;
const ZALGO = colors.zalgo;
const BRIGHTGREEN = colors.brightGreen;
const BRIGHTRED = colors.brightRed;
const BRIGHTYELLOW = colors.brightYellow;
const BRIGHTBLUE = colors.brightBlue;
const BRIGHTMAGENTA = colors.brightMagenta;
const BRIGHTCYAN = colors.brightCyan;
const BRIGHTWHITE = colors.brightWhite;

const testStyle = () => {
    console.log(SUCCESS('Success!'));
    console.log(INFO('Info!'));
    console.log(WARNING('Warning!'));
    console.log(ERROR('Error!'));
    console.log(ASK('Ask!'));
    console.log(HINT('Hint!'));
    console.log(UNDERLINE('Underline!'));
    console.log(RESET('Reset!'));
    console.log(BOLD('Bold!'));
    console.log(ITALIC('Italic!'));
    console.log(INVERSE('Inverse!'));
    console.log(STRIKETHROUGH('Strikethrough!'));
    console.log(RAINBOW('Rainbow!'));
    console.log(ZEBRA('Zebra!'));
    console.log('\n\n🇺🇸🇺🇸🇺🇸' + AMERICA(' A M E R I C A ! ') + '🇺🇸🇺🇸🇺🇸\n\n');
    console.log(TRAP('Trap!'));
    console.log(RANDOM('Random!'));
    console.log(ZALGO('Zalgo!'));
    console.log(BRIGHTGREEN('BrightGreen!'));
    console.log(BRIGHTRED('BrightRed!'));
    console.log(BRIGHTYELLOW('BrightYellow!'));
    console.log(BRIGHTBLUE('BrightBlue!'));
    console.log(BRIGHTMAGENTA('BrightMagenta!'));
    console.log(BRIGHTCYAN('BrightCyan!'));
    console.log(BRIGHTWHITE('BrightWhite!'));
}

testStyle();