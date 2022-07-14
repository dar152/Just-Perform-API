const express = require("express");
const router = express.Router();

//GET account media (posts)
router.get('/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;

        res.json({
            "account_id": account_id,
            "media": {
                "media_uuid_45jgf": {
                    "media_type": "image",
                    "media_url": "https://imgs.search.brave.com/bYAWGPxv_mDUhKqkkdACgPf2qqaLDan2p6UyueqgVJo/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/czYuZmFucG9wLmNv/bS9pbWFnZS9waG90/b3MvMzUyMDAwMDAv/RG9nLWRvZ3MtMzUy/NDc3MTktMzcwNi0y/NDgwLmpwZw",
                    "caption": "My dog is cute",
                    "posted_on": "07/08/2022 04:27 EST"
                },
                "media_uuid_hj674": {
                    "media_type": "video",
                    "media_url": "youtube.com",
                    "caption": "check out this video",
                    "posted_on": "07/01/2022 11:43 EST"
                }
            }
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

//GET post's comments
router.get('/:media_id/comments', async (req, res) => {
    try {
        const { media_id } = req.params;

        res.json({  
            "media_id": media_id,
            "comments": {
              "comment_uuid_242r9" : {
                "user_handle" : "Jake40",
                "comment_text" : "That's a great a video!",
                "posted_on" : "07/02/2022 04:24 GMT"
              },
              "comment_uuid_0284sd" : {
                "user_handle" : "Jane449",
                "comment_text" : "Nice video!",
                "posted_on" : "07/03/2022 01:22 GMT"
              }
            }
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

// Post media (post)
router.post('/', async (req, res) => {
    try {
        const { account_id, media_id, media_type, caption } = req.body;

        res.json({
            "status": 200,
            "account_id": account_id,
            "media_id": media_id,
            "media_type": media_type,
            "caption": caption
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

// Patch a like
/**
    Still not sure about this one
**/
router.patch('/', async (req, res) => {
    try {
        const { media_id, account_id, did_like } = req.body;

        res.json({
            "status": 200,
            "media_id": media_id,
            "account_id": account_id,
            "did_like": did_like
        });

    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        });
        console.error(err);
    }
})

// Delete a comment
router.delete('/:media_id/comments/:comment_id', async (req, res) => {
    try {
        //db DELETE query
        const { media_id, comment_id } = req.params;

        res.json({
            "status": 200,
            "media_id": media_id,
            "comment_id": comment_id
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

export default router;