const request = require("request"),
    cheerio = require("cheerio"),
    url = "https://gofederation.ru/players/";
exports.parse = parse;



function parse(getResult) {
    request(url, function (error, response, body) {
        if (!error) {
            const rfg = cheerio.load(body);
            const table = nodeListToArray(rfg("tr"));

            const row = table.map(nodeListToArray);
            const [, ...rows]  = row.map(value => value.map(getDataFromNode));
            const players = rows.map(transformPlayerToObject).filter((value, index) => index < 100);
            const data = {
                players
            };
            getResult(data);
        } else {
            console.log("Произошла ошибка: " + error);
        }
    });
}

function getDataFromNode(node) {
    const element = node?.[0];
    const isTag = element?.type === 'tag';
    const data = isTag ? element?.children?.[0]?.data : element?.data;
    return data ?? "Нет информации";
}

function transformPlayerToObject(array) {
    return {
        name: array[1],
        city: array[2],
        danKyu: array[3],
        rating: array[4],
        dispersion: array[5],
        lastTournamentDate: array[6]
    }
}

function nodeListToArray(nodeList) {
    return Array.from(nodeList).map(value => value.children);
}