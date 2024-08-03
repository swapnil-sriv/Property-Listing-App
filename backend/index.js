const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/properties');
const inquiryRoutes = require('./routes/inquiries');

const app = express();  
app.use(cors());
app.use(bodyParser.json());

app.use('/api/properties', propertyRoutes);
app.use('/api/inquiries', inquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
