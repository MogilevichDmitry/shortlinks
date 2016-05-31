import express from 'express';
import Link from '../models/link';

const redirectRouter = express.Router();

redirectRouter.get('/:shortLink', function(req, res) {
    Link.findOne({ shortLink : req.params.shortLink }, function(err, link) {

        if(err){
            console.log(err);
        } else {

            if (link) {
                var initialLink = link.initialLink;
                res.redirect(initialLink);

            } else {
                return res.status(400).send("Link is not correct");
            }
        }
    });
});

export default redirectRouter;
