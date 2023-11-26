export type UserType = {
    "bananas": number,
    "lastDayPlayed": string,
    "longestStreak": number,
    "name": string,
    "stars": number,
    "subscribed": boolean,
    "uid": string
}

export type DataSet = {
    [key: string] : UserType
}

export type TableData = [string, number, number];

export type Options = {
    [key: string]: UserType[];
  }

