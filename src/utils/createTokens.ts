const MIN_QUERY_LENGTH = 4;

const createTokens = (str: string) => {
  const strToLowerCase = str.toLowerCase();
  const [minChars, restStr] = [
    strToLowerCase.slice(0, MIN_QUERY_LENGTH),
    strToLowerCase.slice(MIN_QUERY_LENGTH),
  ];
  const arrName: string[] = [minChars];
  let curName = `${minChars}`;

  restStr.split("").forEach((letter) => {
    curName += letter;
    arrName.push(curName);
  });
  return arrName;
};

export default createTokens;
