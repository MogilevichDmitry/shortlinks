import express from 'express';
import Link from '../models/link';

const linkInfoRouter = express.Router();


linkInfoRouter.get('/:shortLink', function(req, res) {

    Link.findOne({ shortLink: req.params.shortLink }, function(err, link) {

        if(err){
            console.log(err);
        } else {

            if(link) {

                res.send({
                    author: link.author,
                    clickCount: link.clickCount,
                    initialLink: link.initialLink,
                    shortLink: link.shortLink,
                    description: "need add description in model",
                    tags: "need tags in model"
                });

            } else {
                return res.status(400).send("Link is not correct");
            }
        }
    })
});

export default linkInfoRouter;
