import { DataSet, Options, TableData, UserType, UserType2 } from "./types";

export const findName = (searchName: string, data: DataSet) => {
    return Object.values(data).filter(user => user.name.toLowerCase() === searchName.toLowerCase());
};

export const sortArray = (data: DataSet): UserType[] => {
    return Object.values(data).sort((a: UserType, b: UserType) => b.bananas - a.bananas);
}

export const findTopTen = (data: UserType[]): TableData[] => {
    return data.slice(0, 10).map((user: UserType, index) => {
        return [user.name, index + 1, user.bananas];
    })
}

export const sortByBananas = (data: UserType[]): UserType[] => {
    return data.slice().sort((a: UserType, b: UserType) => b.bananas - a.bananas);
};

export const sortAlphabetically = (data: UserType[]): UserType[] => {
    return data.slice().sort((a: UserType, b: UserType) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
    });
};

export const sortByBananasAndName = (data: UserType[]): UserType[] => {
    return data.slice().sort((a: UserType, b: UserType) => {
        if (b.bananas !== a.bananas) {
            return a.bananas - b.bananas;
        } else {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        }
    });
};

export const sortData = (data: DataSet, type: string): TableData[] => {
    const filteredData = Object.values(data).filter((user: UserType) => user.name.trim() !== "");

    const sortedArray = sortByBananas(filteredData);
    const alphabeticalOrder = sortAlphabetically(filteredData);
    const lowestRanked = sortByBananasAndName(filteredData);

    const options: Options = {
        'sortedArray': sortedArray,
        'alphabeticalOrder': alphabeticalOrder,
        'lowestRanked': lowestRanked
    };

    return options[type].map((user: UserType, index: number) => {
        return [user.name, sortedArray.indexOf(user) + 1, user.bananas];
    });
};

export const addToLast = (searchName: string, data: DataSet, sortedArray: UserType[], topTen: TableData[]): TableData[] => {

    if (findName(searchName, data).length && findName(searchName, data)[0].name !== "") {
        const foundData: TableData = [findName(searchName, data)[0].name, sortedArray.indexOf(findName(searchName, data)[0]) + 1, findName(searchName, data)[0].bananas];
        const inTopTen = topTen.some((data: TableData) => data[0] === foundData[0]);

        if (!inTopTen) {
            topTen.pop();
            topTen.push(foundData);
        };
    };

    return topTen;
}

export const topTenData = (data: DataSet, searchName: string): TableData[] => {
    const sortedArray = sortArray(data);

    const topTen = findTopTen(sortedArray);

    return addToLast(searchName, data, sortedArray, topTen);
}

export const searchNames = (data: DataSet, searchText: string): string[] => {
    const names: string[] = Object.values(data)
        .filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))
        .map((user) => user.name);

    return names;
};

export const createDataObject = (array: UserType2[]) => {

    return array.reduce((transformedObject: Record<string, UserType>, item: UserType2) => {

        transformedObject[item._id] = {
            bananas: item.bananas,
            lastDayPlayed: item.lastDayPlayed,
            longestStreak: item.longestStreak,
            name: item.name,
            stars: item.stars,
            subscribed: item.subscribed,
            uid: item.uid
        };

        return transformedObject;
    }, {});
};
