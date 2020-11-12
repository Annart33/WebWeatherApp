export class Weather {
    public constructor(
        public LocalObservationDateTime?: string,
        public EpochTime?: number,
        public WeatherText?: string,
        public WeatherIcon?: number,
        public HasPrecipitation?: boolean,
        public PrecipitationType?: string,
        public IsDayTime?: boolean,
        public Temperature?: Temperature,
        public MobileLink?: string,
        public Link?: string
    ) { }
}

export class Temperature {
    public constructor(
        public Metric?: Metric,
        public Imperial?: Imperial
    ) { }
}

export class Metric {
    public constructor(
        public Value?: number,
        public Unit?: string,
        public UnitType?: number
    ) { }
}

export class Imperial {
    public constructor(
        public Value?: number,
        public Unit?: string,
        public UnitType?: number
    ) { }
}