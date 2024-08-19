const express = require('express');
const app = express();

// Route to handle the 302 redirect
app.get('/55win', (req, res) => {
  res.redirect(302, 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
