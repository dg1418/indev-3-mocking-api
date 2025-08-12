const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const API_PREFIX = '/api';

// Auth
app.post(`${API_PREFIX}/auth/login/kakao`, (req, res) => {
  res.json({
    "success": true,
    "message": "로그인 성공",
    "accessToken": "mock-access-token",
    "refreshToken": "mock-refresh-token"
  });
});

app.get(`${API_PREFIX}/auth/logout`, (req, res) => {
  res.json({
    "success": true,
    "message": "로그아웃 성공"
  });
});

app.get(`${API_PREFIX}/auth/access-token/refresh`, (req, res) => {
  res.json({
    "accessToken": "new-mock-access-token"
  });
});

// Users
app.get(`${API_PREFIX}/users/me`, (req, res) => {
  res.json({
    "id": 1,
    "name": "홍대경",
    "imagePath": "/path/to/image.jpg"
  });
});

app.patch(`${API_PREFIX}/users/me`, (req, res) => {
  const { name } = req.body;
  res.json({
    "id": 1,
    "name": name || "엄준식",
    "imagePath": "/path/to/image.jpg"
  });
});

// Sessions
app.get(`${API_PREFIX}/users/me/sessions`, (req, res) => {
  res.json([
    {
      "id": 1,
      "startedAt": "2024-08-10T10:00:00Z",
      "keywordIds": [1]
    },
    {
      "id": 2,
      "startedAt": "2024-08-11T11:30:00Z",
      "keywordIds": [2, 3]
    }
  ]);
});

app.post(`${API_PREFIX}/users/me/sessions`, (req, res) => {
  res.json({
    "id": 3,
    "startedAt": "2025-08-11T05:17:47.720Z",
    "keywordIds": [1, 3, 4]
  });
});

// Messages
app.get(`${API_PREFIX}/users/me/messages`, (req, res) => {
  // const { sessionId, cursor } = req.query;
  res.json([
    {
      "type": 0,
      "text": "라마야, 안녕?"
    },
    {
      "type": 1,
      "text": "안녕하세요! 무엇을 도와드릴까요?"
    }
  ]);
});

app.post(`${API_PREFIX}/users/me/messages`, (req, res) => {
  res.json({
    "success": true
  });
});

// Keywords
app.get(`${API_PREFIX}/keywords`, (req, res) => {
  res.json([
    { "id": 1, "name": "두통" },
    { "id": 2, "name": "치통" },
    { "id": 3, "name": "복통" },
    { "id": 4, "name": "배아픔" }
  ]);
});


app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});