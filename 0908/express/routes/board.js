// @ts-check
const express = require('express');

const router = express.Router();
const POST = [
  {
    title: 'asd',
    content: 'asd',
  },
  {
    title: 'test',
    content: 'test',
  },
];

router.get('/', (req, res) => {
  const contentLen = POST.length;
  res.render('board', { POST, contentCounts: contentLen });
});
router.delete('/:title', (req, res) => {
  const arrIndex = POST.findIndex((user) => user.title === req.params.title);
  if (arrIndex !== -1) {
    POST.splice(arrIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});
module.exports = { router, POST };
