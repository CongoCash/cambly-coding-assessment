function uniqueWords(str) {
  let split = str.toLowerCase().replace(/(\n|\r|[^a-zA-Z0-9])/g,' ').split(' '), unique = {};

  for (let i = 0; i < split.length; i++) {
    if (split[i].length > 0) {
      unique[split[i]] = unique[split[i]] + 1 || 1;
    }
  }

  let sorted = [];

  for (let key in unique) {
    sorted.push({word: key, count: unique[key]});
  }

  sorted.sort(function(a, b) {
    if (b.count - a.count) {
      return b.count - a.count;
    }
    else if (a.word < b.word) {
      return -1;
    }
    else if (a.word > b.word) {
      return 1;
    }
  });

  return sorted
}

let test_str = `From the moment the first immigrants arrived on these shores, generations of parents have worked
hard and sacrificed whatever is necessary so that their children could have the same chances they
had; or the chances they never had. Because while we could never ensure that our children would
be rich or successful; while we could never be positive that they would do better than their
parents, America is about making it possible to give them the chance. To give every child the
opportunity to try. Education is still the foundation of this opportunity. And the most basic
building block that holds that foundation together is still reading. At the dawn of the 21st
century, in a world where knowledge truly is power and literacy is the skill that unlocks the
gates of opportunity and success, we all have a responsibility as parents and librarians,
  educators and citizens, to instill in our children a love of reading so that we can give them the
chance to fulfill their dreams.`;

console.log(uniqueWords(test_str));