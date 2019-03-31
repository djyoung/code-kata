// https://www.codewars.com/kata/581c06b95cfa838603000435

const cheerio = require('cheerio');
const request = require('request');
const URL = 'https://www.codewars.com/users/leaderboard';

function solution() {
    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const $ = cheerio.load(body);
            console.log($('.leaderboard').text());
        });
    });   
}