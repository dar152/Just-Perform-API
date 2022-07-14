const express = require("express");
const router = express.Router();


//GET account info
router.get('/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;
        // const account = await pool.query('SELECT * FROM ___ WHERE ___');
        // res.json(account.rows);        

        res.json({
            "username": "user123",
            "account_id": account_id,
            "name": "Jan E"
        })
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

//GET account friends
router.get('/:account_id/friends', async (req, res) => {
    try {
        const { account_id } = req.params;

        res.json({
            "account_id": account_id,
            "friends": {
                "friend_uuid_34jt5": {
                    "friend_account_id": 2345,
                    "friend_name": "Alex B",
                    "friend_username": "alexiscool900"
                },
                "friend_uuid_34jl5": {
                    "friend_account_id": 3456,
                    "friend_name": "Andrea T",
                    "friend_username": "ilikecats"
                }
            }
        });
    } catch (err) {
        res.json({
            status: err.status,
            message: err.message
        })
        console.error(err);
    }
});

// Create account
router.post('/', async (req, res) => {
    try {
        const { username, password, account_id, name } = req.body;

        res.json({
            "status": 200,
            "username": username,
            "password": password,
            "account_id": account_id,
            "name": name
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

// Add friends
router.post('/friends', async (req, res) => {
    try {
        //db INSERT query
        const { account_id, friend_account_id } = req.body;

        res.json({
            "status": 200,
            "account_id": account_id,
            "friend_account_id": friend_account_id
        });

    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});


// Delete an account
router.delete('/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;
        
        res.json({
            "account_id": account_id,
            "status": 200,
        });
    } catch (err) {
        res.json({
            "status": err.status,
            "message": err.message
        })
        console.error(err);
    }
});

// Delete a post
router.delete('/:account_id/:media_id', async (req, res) => {
    try {
        const { account_id, media_id } = req.params;

        res.json({
            "status": 200,
            "account_id": account_id,
            "media_id": media_id
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