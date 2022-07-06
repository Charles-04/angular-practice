export interface Sports {
    stadium: string;
    country: string;
    region: string;
    tournament: string;
    start: Date | string;
    match: string;
}

export class Sports {
    stadium: string;
    country: string;
    region: string;
    tournament: string;
    start: Date | string;
    match: string;

    constructor(
        stadium: string,
        country: string,
        region: string,
        tournament: string,
        start: Date | string,
        match: string,
    ){
        this.stadium = stadium;
        this.country = country;
        this.region = region;
        this.tournament = tournament;
        this.start = start
        this.match = match
    }
}