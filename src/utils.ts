import { DataSet, TableData, UserType } from "./types";

export const findName = (searchName: string, data: DataSet) => {
    return Object.values(data).filter(user => user.name.toLowerCase() === searchName.toLowerCase());
};

export const tableData = (data: DataSet, searchName: string): TableData[] => {
    const sortedArray = Object.values(data).sort((a: UserType, b: UserType) => b.bananas - a.bananas);

    let topTen: TableData[] = sortedArray.slice(0, 10).map((user: UserType, index) => {
        return [user.name, index + 1, user.bananas];
    });

    if (findName(searchName, data).length && findName(searchName, data)[0].name !== "") {
        const foundData: TableData = [findName(searchName, data)[0].name, sortedArray.indexOf(findName(searchName, data)[0]) + 1, findName(searchName, data)[0].bananas];
        const inTopTen = topTen.some((data: TableData) => data[0] === foundData[0]);

        if (!inTopTen) {
            topTen.pop();
            topTen.push(foundData);
        };
    }

    return topTen;
}