const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
          const to = req.body.data.to;
          const text = req.body.data.text;
          const from = 'WEB3SMS';
          const apiKey = '473d3aba';
          const apiSecret = 'ZIu8VnYsav99tSew';

          try {
                      const response = await axios.post('https://rest.nexmo.com/sms/json', {
                                    from,
                                    text,
                                    to,
                                    api_key: apiKey,
                                    api_secret: apiSecret
                                  });

                      res.status(200).json({
                                    jobRunID: req.body.id,
                                    data: response.data,
                                    statusCode: 200,
                                  });
                    } catch (error) {
                                res.status(500).json({
                                              jobRunID: req.body.id,
                                              status: 'errored',
                                              error: error.toString(),
                                            });
                              }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
