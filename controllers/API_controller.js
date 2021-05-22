const Member = require('../models/api_model');
const request = require('request');

//API
exports.getAllPlayer = async (req, res) => {
    let data = {};
    try {
        await Member.fetch_api().then(([rows]) => {
            res.json(rows);
        });
    } catch (err) {
        console.log(err);
    }
};
