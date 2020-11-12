export class Location {
    public constructor(
        public Version?: number,
        public Key?: string,
        public Type?: string,
        public Rank?: number,
        public LocalizedName?: string,
        public Country?: Country,
        public AdministrativeArea?: any,
    ) { }

}

export class Country {
    public constructor(
        public ID?: string,
        public LocalizedName?: string
    ) { }
}