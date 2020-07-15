const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.json({"Title": "Hellow world"});
});

module.exports = router;