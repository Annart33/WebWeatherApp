export class Forcast {
    constructor(
        Headline?: Headline,
        DailyForecasts?: DailyForecast[]
    ) { }
}

export class Headline {
    public constructor(
        EffectiveDate?: Date,
        EffectiveEpochDate?: number,
        Severity?: number,
        Text?: string,
        Category?: string,
        EndDate?: Date,
        EndEpochDate?: number,
        MobileLink?: string,
        Link?: string
    ) { }
}

export class Minimum {
    constructor(
        Value?: number,
        Unit?: string,
        UnitType?: number
    ) { }
}

export class Maximum {
    constructor(
        Value?: number,
        Unit?: string,
        UnitType?: number
    ) { }
}

export class Temperature {
    constructor(
        Minimum?: Minimum,
        Maximum?: Maximum
    ) { }
}

export class Day {
    constructor(
        Icon?: number,
        IconPhrase?: string,
        HasPrecipitation?: boolean
    ) { }
}

export class Night {
    constructor(
        Icon?: number,
        IconPhrase?: string,
        HasPrecipitation?: boolean
    ) { }
}

export class DailyForecast {
    constructor(
        Date?: Date,
        EpochDate?: number,
        Temperature?: Temperature,
        Day?: Day,
        Night?: Night,
        Sources?: string[],
        MobileLink?: string,
        Link?: string
    ) { }
}







