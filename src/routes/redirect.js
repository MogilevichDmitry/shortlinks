import express from 'express';
import Link from '../models/link';

const redirectRouter = express.Router();

redirectRouter.get('/:shortLink', function(req, res) {
    Link.findOne({ shortLink : req.params.shortLink }, function(err, link) {

        if(err){
            console.log(err);
        } else {

            if(link) {

                link.clickCount ++;

                link.save(function (err){

                    if (err) return res.send(err);

                    console.log("clickCount updated");
                });

                var initialLink = link.initialLink;
                res.redirect(initialLink);

            } else {
                return res.status(400).send("Link is not correct");
            }
        }
    });
});

export default redirectRouter;
