// @ts-check
const express = require('express');
const reqPost = require('./board');
const router = express.Router();
const POST = reqPost.POST;

router.get('/:title', (req, res) => {
  const title = req.params.title;
  res.render('modify', { title });
});
router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.title && req.body.content) {
    const contentData = POST.find((post) => post.title === req.body.id);
    if (contentData) {
      const arrIndex = POST.findIndex((post) => post.title === req.body.id);
      const modifyUser = {
        title: req.body.title,
        content: req.body.content,
      };
      POST[arrIndex] = modifyUser;
      res.redirect('board');
    }
  } else {
    const err = new Error('둘중 한게 안씀 not found');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
