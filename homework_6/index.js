const CvStat = require('./cv_stat');
const axios = require('axios');
const ora = require('ora');

const cvUrl = "https://api.covid19api.com/summary";

async function getCvStat(){
const spinner = ora('Проверяем данные').start();
spinner.spinner = {frames:["👨‍💻"]};

const response = await axios.get(cvUrl);
spinner.stop();
const countries = response.data.Countries;

const result = countries.map(item => new CvStat(item))
result.forEach(stat => stat.print());
}

getCvStat()

