import Link from '../models/link';
import _ from 'lodash';

let newShort;
const shortLinks = [];

Link.find({}, function (err, links) {

    if (err) {
        console.log(err);

    } else {

        links.map(link => {
            shortLinks.push(link.shortLink);
        });
    }
});

function getShortLink() {

    const generateShort = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNPQRSTUVWXYZ";

        for (let i = 0; i < 4; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    newShort = generateShort();

    while(_.indexOf(shortLinks, newShort) > 0){
        console.log(newShort + " is not unique, need to generate again");
        newShort = generateShort();
    }

    shortLinks.push(newShort);

    console.log("shortLink: " + newShort);

    return newShort;

}

export default getShortLink;