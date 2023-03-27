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
    const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        alert('there was an error retrieving data from the db');
        console.log(err);
    })

}); // END GET Route

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "gallery" ("title", "path", "description")
    VALUES($1, $2, $3)`;
    const galleryData = [
        req.body.title,
        req.body.path,
        req.body.description
    ]

    pool.query(queryText, galleryData).then(result => {
        res.sendStatus(201);
    }).catch(err => {
        alert('There was an issue posting to the db');
        res.sendStatus(500);
    })
})

router.delete('/remove/:id', (req, res) => {
    const idToDelete = req.params.id;
    const queryText = 
        `DELETE FROM "gallery"
        WHERE id = $1;`

        pool.query(queryText, [idToDelete])
            .then(result => {
                console.log('successfully deleted item from db where id =', idToDelete);
                res.sendStatus(200);
            }).catch(err => {
                alert('there was an issue deleting from db');
                res.sendStatus(500);
            })

})

module.exports = router;