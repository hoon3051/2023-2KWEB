const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send("<h1>제목</h1>"));
router.post('/', (req, res) => res.send('POST /'));

module.exports = router;
