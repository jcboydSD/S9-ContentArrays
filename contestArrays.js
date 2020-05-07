const coders = [
    {name: 'Anna', score: 6.7, speed: 35},
    {name: 'Mary', score: 7.6, speed: 65},
    {name: 'Greg', score: 5.6, speed: 57},
    {name: 'Jason', score: 4.5, speed: 30},
    {name: 'Grace', score: 5.9, speed: 29},
    {name: 'Jane', score: 3.7, speed: 35},
    {name: 'Paul', score: 8.6, speed: 42},
    {name: 'Lisa', score: 2.5, speed: 65},
    {name: 'Kevin', score: 4.3, speed: 61},
    {name: 'Jay', score: 5.9, speed: 52}
];

// all participants
console.log('Programming Contest participants')
coders.forEach(coder => console.log(`${coder.name} scored ${coder.score} in ${coder.speed} minutes`));
console.log('');

// BEST participants (score > 5.0 AND speed < 60)
const best = coders.filter(coder => (coder.score > 5.0 && coder.speed < 60));
console.log(`After filtering for BEST, array is ${best.length}`);
best.forEach(coder => console.log(`${coder.name} scored ${coder.score} in ${coder.speed} minutes`));
console.log('');

// GOOD partipants (score > 5.0 OR speed < 60)
const good = coders.filter(coder => (coder.score > 5.0 || coder.speed < 60));
console.log(`After filtering for GOOD, array is ${good.length}`);
good.forEach(coder => console.log(`${coder.name} scored ${coder.score} in ${coder.speed} minutes`));
console.log('');

// BEST participants - top 3 by score and speed
const topBestScore = best.sort((a,b) => b.score - a.score);
console.log('Programming Contest, BEST, sorted by score');
console.log(`Style Gold goes to ${topBestScore[0].name}, score of ${topBestScore[0].score}`);
console.log(`Style Silver goes to ${topBestScore[1].name}, score of ${topBestScore[1].score}`);
console.log(`Style Bronze goes to ${topBestScore[2].name}, score of ${topBestScore[2].score}`);

const topBestSpeed = best.sort((a,b) => a.speed - b.speed); 
console.log('Programming Contest, BEST, sorted by speed');
console.log(`Speed Gold goes to ${topBestSpeed[0].name}, speed of ${topBestSpeed[0].speed}`);
console.log(`Speed Silver goes to ${topBestSpeed[1].name}, speed of ${topBestSpeed[1].speed}`);
console.log(`Speed Bronze goes to ${topBestSpeed[2].name}, speed of ${topBestSpeed[2].speed}`);
console.log('');

// GOOD participants - top 3 by score and speed
const topGoodScore = good.sort((a,b) => b.score - a.score);
console.log('Programming Contest, GOOD, sorted by score');
console.log(`Style Gold goes to ${topGoodScore[0].name}, score of ${topGoodScore[0].score}`);
console.log(`Style Silver goes to ${topGoodScore[1].name}, score of ${topGoodScore[1].score}`);
console.log(`Style Bronze goes to ${topGoodScore[2].name}, score of ${topGoodScore[2].score}`);

const topGoodSpeed = good.sort((a,b) => a.speed - b.speed); 
console.log('Programming Contest, GOOD, sorted by speed');
console.log(`Speed Gold goes to ${topGoodSpeed[0].name}, speed of ${topGoodSpeed[0].speed}`);
console.log(`Speed Silver goes to ${topGoodSpeed[1].name}, speed of ${topGoodSpeed[1].speed}`);
console.log(`Speed Bronze goes to ${topGoodSpeed[2].name}, speed of ${topGoodSpeed[2].speed}`);
