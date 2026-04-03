// 1910. Remove All Occurrences of a Substring

function findPart(s: string, part: string): [number, number] {
  let cursor = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== part[cursor]) {
      cursor = 0;
      if (i > 0 && s[i - 1] === part[cursor]) {
        cursor = 1;
      }
    }
    if (s[i] === part[cursor]) {
      cursor++;
    }
    console.log("cursor", cursor, s[i], part[Math.max(cursor - 1, 0)]);
    if (part.length === cursor) {
      return [i + 1 - cursor, i + 1];
    }
  }

  return [0, 0];
}

function removeOccurrences(s: string, part: string): string {
  let [start, end] = findPart(s, part);

  while (start + end > 0) {
    s = s.slice(0, start) + s.slice(end);

    [start, end] = findPart(s, part);
  }

  return s;
}

console.log(removeOccurrences("bimbimbig", "bimbig"));
