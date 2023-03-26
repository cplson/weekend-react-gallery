const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    pool.query(queryText, [galleryId]).then(result => {
        console.log('successfully PUT row in db');
        res.sendStatus(200);
    }).catch(err => {
        alert('there was a problem changing a row in the db');
        console.log(err);
    })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery";`;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        alert('there was an error retrieving data from the db');
        console.log(err);
    })

}); // END GET Route

module.exports = router;