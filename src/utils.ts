import { DataSet, Options, TableData, UserType } from "./types";

export const findName = (searchName: string, data: DataSet) => {
    return Object.values(data).filter(user => user.name.toLowerCase() === searchName.toLowerCase());
};

const findTopTen = (data: UserType[]): TableData[] => {

    return data.slice(0, 10).map((user: UserType, index) => {
        return [user.name, index + 1, user.bananas];
    })
}

export const sortData = (data: DataSet, type: string): TableData[] => {
    const filteredData = Object.values(data).filter((user: UserType) => user.name.trim() !== "");
    
    const sortedArray = filteredData.slice().sort((a: UserType, b: UserType) => b.bananas - a.bananas);
    
    const alphabeticalOrder = filteredData.slice().sort((a: UserType, b: UserType) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
    
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  
    const lowestRanked = filteredData.slice().sort((a: UserType, b: UserType) => {
        if (b.bananas !== a.bananas) {
          return a.bananas - b.bananas;
        } else {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return nameA.localeCompare(nameB);
        }
      });

    const options: Options = {
        'sortedArray': sortedArray,
        'alphabeticalOrder': alphabeticalOrder,
        'lowestRanked': lowestRanked
    }
  
    return options[type].map((user: UserType) => {
      return [user.name, sortedArray.indexOf(user) + 1, user.bananas];
    });
  };
  

const addToLast = (searchName: string, data: DataSet, sortedArray: UserType[], topTen: TableData[]) => {

    if (findName(searchName, data).length && findName(searchName, data)[0].name !== "") {
        const foundData: TableData = [findName(searchName, data)[0].name, sortedArray.indexOf(findName(searchName, data)[0]) + 1, findName(searchName, data)[0].bananas];
        const inTopTen = topTen.some((data: TableData) => data[0] === foundData[0]);

        if (!inTopTen) {
            topTen.pop();
            topTen.push(foundData);
        };
    };
}

export const topTenData = (data: DataSet, searchName: string): TableData[] => {
    const sortedArray = Object.values(data).sort((a: UserType, b: UserType) => b.bananas - a.bananas);

    const topTen = findTopTen(sortedArray);

    addToLast(searchName, data, sortedArray, topTen);

    return topTen;
}

