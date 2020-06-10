export interface Weather {
    climateInfo: Climate,
    waveInfo: Wave,
    windInfo: Wind
}

export interface Climate {
    cloudcover: number,
    date: Date,
    description: string,
    rain: number,
    temp: number
}

export interface Wave {
    date: Date,
    wavePeriod: number,
    waveSize: number
}

export interface Wind {
    avg: number,
    date: Date,
    direction: string,
    high: number,
    low: number
}