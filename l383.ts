function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineChars = new Map<string, number>();

  for (const char of magazine) {
    if (magazineChars.has(char)) {
      magazineChars.set(char, magazineChars.get(char)! + 1);
    } else {
      magazineChars.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char)! - 1);
    } else {
      return false;
    }
  }

  return true;
}
