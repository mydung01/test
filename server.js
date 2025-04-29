const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Cho phép Express phục vụ file tĩnh trong thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Xử lý POST khi người dùng nhấn nút trả lời
app.post('/answer', (req, res) => {
  const { answer } = req.body;
  console.log(`Người dùng trả lời: ${answer}`);
  res.send(`<h2>Cảm ơn em đã trả lời: ${answer}</h2><a href="/">Quay lại</a>`);
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
