export class ScoreService {

  getScores() {
      return fetch('../data/scores.json').then(res => res.json()).then(d => d.data);
  }
}