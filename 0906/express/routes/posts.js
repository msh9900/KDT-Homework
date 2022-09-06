const express = require('express');

const router = express.Router();

const USER = [
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
  const userLen = USER.length;
  res.render('posts', {
    USER,
    userCounts: userLen,
  });
});

router.get('/:title', (req, res) => {
  const userData = USER.find((user) => user.title === req.params.title);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});
router.post('/', (req, res) => {
  if (req.query.title && req.query.content) {
    const newUser = {
      title: req.query.title,
      content: req.query.content,
    };
    USER.push(newUser);
    res.send('회원 등록 완료');
  } else {
    const err = new Error('not query');
    err.statusCode = 404;
    throw err;
  }
});
router.put('/:title', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  if (req.query.title && req.query.content) {
    const userData = USER.find((user) => user.title === req.params.title);
    if (userData) {
      const arrIndex = USER.findIndex(
        (user) => user.title === req.params.title
      );
      const modifyUser = {
        title: req.query.title,
        content: req.query.content,
      };
      USER[arrIndex] = modifyUser;
      res.send('회원 수정완료 ');
    }
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});
router.delete('/:title', (req, res) => {
  const arrIndex = USER.findIndex((user) => user.title === req.params.title);
  if (arrIndex !== -1) {
    USER.splice(arrIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
