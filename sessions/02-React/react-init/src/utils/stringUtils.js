export function capitalize(str = "") {
  if (!str.length) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str = "") {
  return [...str].reverse().join("");
}

export function isPalindrome(str = "") {
  const norm = (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[\W_]/g, "");
  return norm === [...norm].reverse().join("");
}

export function countVowels(str = "") {
  const m = (str || "").match(/[aeiouáéíóúü]/gi);
  return m ? m.length : 0;
}
