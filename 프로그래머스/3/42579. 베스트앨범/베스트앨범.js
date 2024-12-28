function solution(genres, plays) {
  const answer = [];
  const map = {};

  for (let i = 0; i < genres.length; i++) {
      const prevObj = map[genres[i]];
      map[genres[i]] = {
        sum:( prevObj?.sum ||0)+ plays[i],
        arr: [...(prevObj?.arr||[]), [i, plays[i]]],
      };
  }

  const sortedgenre = Object.keys(map).sort((a, b) => map[b].sum - map[a].sum);

  // let totalCount = sortedgenre.length * 2;

  for (let i = 0; i < sortedgenre.length; i++) {
    map[sortedgenre[i]].arr.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });

    if (map[sortedgenre[i]].arr.length === 1) {
      answer.push(map[sortedgenre[i]].arr[0][0]);
    } else {
      for (let j = 0; j < 2; j++) {
        answer.push(map[sortedgenre[i]].arr[j][0]);
      }
    }
  }
    
    return answer; 
  // return answer.sl/ice(0, totalCount);
}
