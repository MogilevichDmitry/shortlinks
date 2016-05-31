import express from 'express';
import Link from '../models/link';

const tagRouter = express.Router();

tagRouter.get('/:tag', function(req, res) {
   Link.find({ tags : req.params.tag }, function(err, links) {

       if(err) {
           console.log(err);
       } else {

           if(links){

               const arrLinks = []

               links.map(link => {
                   arrLinks.push(link.initialLink);
               })

               res.send(arrLinks);

           } else {
               return res.status(400).send("Link is not correct");
           }
       }
   });
});


export default tagRouter;