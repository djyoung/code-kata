// https://www.codewars.com/kata/581c06b95cfa838603000435

const cheerio = require('cheerio');
const request = require('request');
const URL = 'https://www.codewars.com/users/leaderboard';

function solution() {
    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const $ = cheerio.load(body);
            const leaderboard = { position: {} }
            $('.leaderboard tr')
                .slice(1) // Skip header
                .each((index, element) => {
                    const $element = $(element);
                    const name = $element.data('username');
                    const rank = $element.children().first().text().slice(1);
                    const clan = $element.children().eq(2).text();
                    const honor = +$element.children().eq(3).text().replace(/,/g, '');

                    leaderboard.position[rank] = {
                        name,
                        clan,
                        honor
                    };
                });

            resolve(leaderboard)
        });
    });
}