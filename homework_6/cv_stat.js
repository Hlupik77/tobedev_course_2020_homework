class CvStat {
    constructor({Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered}) {
        this.Country = Country
        this.NewConfirmed = NewConfirmed
        this.TotalConfirmed = TotalConfirmed
        this.NewDeaths = NewDeaths
        this.TotalDeaths = TotalDeaths
        this.NewRecovered = NewRecovered
        this.TotalRecovered = TotalRecovered
    }

    print = () => console.log(`{
    "Страна":${this.Country}
    "Новых заболевших":${this.NewConfirmed}
    "Всего заболевших":${this.TotalConfirmed}
    "Новых смертей":${this.NewDeaths}
    "Всего смертей":${this.TotalDeaths}
    "Новых выздоровевших":${this.NewRecovered}
    "Всего выздоровевших":${this.TotalRecovered}
    }`)
}

module.exports = CvStat ;