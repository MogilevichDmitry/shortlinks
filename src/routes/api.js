import express from "express";
import Link from '../models/links';

const router = express.Router();
console.log('Hello');

router.post('/links', function(req, res) {
    Link.create({initialLink: req.body.initialLink}, function(err, link) {
       if(err) {
           console.log(err);
       } else {
           const tempShort = 1;
           res.send(link);
       }
    });
});

router.get('/links', function(req, res) {
   Link.find({}, function(err, links) {
      if(err) {
          console.log(err);
      } else {
          res.send(links);
      }
   });
});

export default router;
