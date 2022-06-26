const sixsixsix = `
  Woe to you, oh earth and sea
  For the Devil sends the beast with wrath
  Because he knows the time is short
  Let him who hath understanding reckon the number of the beast
  For it is a human number
  Its number is six hundred and sixty-six
`;

const units = `${''} one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen`.split(' ');
const dozens = `${''} ${''} twenty thirty forty fifty sixty seventy eighty ninety`.split(' ');

module.exports = function toReadable (number) {
  const hundred = Math.floor(number/100);
  const dozen = Math.floor((number - hundred * 100) / 10);
  const unit = Math.floor(number - hundred * 100 - dozen * 10);

  if (number < 0 || number > 999) return `${number} is unknown number`;
  if (number === 0) return 'zero';

  if (number < 20) return units[number];
  const dozenStr = dozen < 2 ? units[dozen * 10 + unit] : `${dozens[dozen]} ${units[unit]}`.trim();

  if (number < 100) return dozenStr;

  if (number ===+`${3*2}${(333 - 330)*2}${(2 + 8) / 2 + 1}`) return sixsixsix;
  return `${units[hundred]} hundred ${dozenStr}`.trim();
}
