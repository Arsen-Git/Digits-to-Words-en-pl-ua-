function digitToWords(stringNum, lang) {
  let num = parseInt(stringNum);

  let jednosci = {
    pl: [
      "",
      " Jeden",
      " Dwa",
      " Trzy",
      " Cztery",
      " Pięć",
      " Sześć",
      " Siedem",
      " Osiem",
      " Dziewięć",
    ],
    en: [
      "",
      " One",
      " Two",
      " Three",
      " Four",
      " Five",
      " Six",
      " Seven",
      " Eight",
      " Nine",
    ],
    ua: [
      "",
      " Одна",
      " Дві",
      " Три",
      " Чотири",
      " Пять",
      " Шість",
      " Сім",
      " Вісім",
      " Девять",
    ],
  };
  let nascie = {
    pl: [
      "",
      " jedenaście",
      " Dwanaście",
      " Trzynaście",
      " czternaście",
      " piętnaście",
      " szesnaście",
      " siedemnaście",
      " osiemnaście",
      " Dziewietnaście",
    ],
    en: [
      "",
      " Eleven",
      " Twelve",
      " Thirteen",
      " Fourteen",
      " Fifteen",
      " Sixteen",
      " Seventeen",
      " Eighteen",
      " Nineteen",
    ],
    ua: [
      "",
      " Одинадцять",
      " Дванадцять",
      " Тринадцять",
      " Чотирнадцять",
      " Пятнадцять",
      " Шістнадцять",
      " Сімнадцять",
      " Вісімнадцять",
      " Девятнадцять",
    ],
  };
  let dziesiatki = {
    pl: [
      "",
      " Dziesięć",
      " Dwadzieścia",
      " Trzydzieści",
      " Czterdzieści",
      " Pięćdziesiąt",
      " Sześćdziesiąt",
      " Siedemdziesiąt",
      " Osiemdziesiąt",
      " Dziewięćdziesiąt",
    ],
    en: [
      "",
      " Ten",
      " Twenty",
      " Thirty",
      " Forty",
      " Fifty",
      " Sixty",
      " Seventy",
      " Eighty",
      " Ninety",
    ],
    ua: [
      "",
      " Десять",
      " Двадцять",
      " Тридцять",
      " Сорок",
      " Пятдесят",
      " Шістдесят",
      " Сімдесят",
      " Вісімдесят",
      " Девяносто",
    ],
  };
  let setki = {
    pl: [
      "",
      " Sto",
      " Dwieście",
      " Trzysta",
      " Czterysta",
      " Pięćset",
      " Sześćset",
      " Siedemset",
      " Osiemset",
      " Dziewięćset",
    ],
    en: [
      "",
      " One Hundred",
      " Two Hundred",
      " Three Hundred",
      " Four Hundred",
      " Five Hundred",
      " Six Hundred",
      " Seven Hundred",
      " Eight Hundred",
      " Nine Hundred",
    ],
    ua: [
      "",
      " Сто",
      " Двісті",
      " Триста",
      " Чотириста",
      " Пятсот",
      " Шістсот",
      " Сімсот",
      " Вісімсот",
      " Девятсот",
    ],
  };
  let grupy = {
    pl: [
      ["", "", ""],
      [" Tysiąc", " Tysiące", " Tysięcy"],
      [" milion", " miliony", " milionów"],
      [" miliard", " miliardy", " miliardów"],
      [" bilion", " biliony", " bilionów"],
      [" biliard", " biliardy", " biliardów"],
      [" Trylion", " Tryliony", " Trylionów"],
    ],
    en: [
      ["", "", ""],
      [" Thousand", " Thousand", " Thousand"],
      [" Million", " Million", " Million"],
      [" Billion", " Billion", " Billion"],
      [" Trillion", " Trillion", " Trillion"],
      [" error", " error", " error"],
      [" error", " error", " error"],
    ],
    ua: [
      ["", "", ""],
      [" Тисяча", " Тисячі", " Тисяч"],
      [" Мільйон", " Мільйони", " Мільйонів"],
      [" Мільярд", " Мільярди", " Мільярдів"],
      [" Триліон", " Триліони", " Триліонів"],
      [" помилка", " помилка", " помилка"],
      [" помилка", " помилка", " помилка"],
    ],
  };

  // jezeli pole zawiera poprawna wartosc calkowita
  if (stringNum == num.toString()) {
    let result = "";
    if (num == 0) result = "zero";
    if (num < 0) {
      num = -num;
    }

    var g = 0;
    while (num > 0) {
      let s = Math.floor((num % 1000) / 100);
      let n = 0;
      let d = Math.floor((num % 100) / 10);
      let j = Math.floor(num % 10);

      if (d == 1 && j > 0) {
        n = j;
        d = 0;
        j = 0;
      }

      let k = 2;
      if (j == 1 && s + d + n == 0) k = 0;
      if (j == 2 || j == 3 || j == 4) k = 1;
      if (s + d + n + j > 0)
        result =
          setki[lang][s] +
          dziesiatki[lang][d] +
          nascie[lang][n] +
          jednosci[lang][j] +
          grupy[lang][g][k] +
          result;

      g++;
      num = Math.floor(num / 1000);
    }
    return result;
  } else {
    return "Error";
  }
}
