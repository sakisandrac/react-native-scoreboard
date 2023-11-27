import { findName, sortArray, findTopTen, sortByBananas, sortAlphabetically, sortData, topTenData, addToLast, searchNames } from "../utils";
import { testData } from './testData';

describe('Utils Functions', () => {

    describe('findName' , () => {
        it('should find the data with the matching name', () => {
            const searchName: string = 'Harry Potter';
            const expectedResult = [{
                "bananas" : 200,
                "lastDayPlayed" : "2018-11-22",
                "longestStreak" : 1,
                "name" : "Harry Potter",
                "stars" : 6,
                "subscribed" : false,
                "uid" : "1"
              }];
            expect(findName(searchName, testData)).toEqual(expectedResult);
        });
    
        it('should return an empty array if no match watching name is found', () => {
            const searchName: string = 'Luna Lovegood';
            const expectedResult: any[] = [];
            expect(findName(searchName, testData)).toEqual(expectedResult);
        });
    });

    describe('sortArray', () => {
        it('should sort data in order of banana ranking', () => {
            expect(sortArray(testData)[0].name).toEqual('Hermione Granger');
            expect(sortArray(testData)[11].name).toEqual('Toke Chen');
        });
    });

    describe('findTopTen', () => {
        it('should return a an array with the top 10 users by rank', () => {
            const topTenArray = findTopTen(sortArray(testData));
            
            expect(topTenArray.length).toEqual(10);
            expect(topTenArray[0][0]).toEqual('Hermione Granger');
        });
    });

    describe('sortBananas', () => {
        it('should sort data by number of bananas and return all data', () => {
            const formattedDataArray = sortArray(testData);

            expect(sortByBananas(formattedDataArray).length).toEqual(12);
            expect(sortByBananas(formattedDataArray)[11].name).toEqual('Toke Chen');
        });
    });
   
    describe('sortAlphebetically', () => {
        it('should sort data by name alphabetically and return all data', () => {
            const formattedDataArray = sortArray(testData);

            expect(sortAlphabetically(formattedDataArray)[0].name).toEqual('');
            expect(sortAlphabetically(formattedDataArray)[11].name).toEqual('Yo Yo Chou');
        });
    });

    describe('sortData', () => {
        it('should return data according to rank', () => {
            const type = 'sortedArray';

            expect(sortData(testData, type)[0][0]).toEqual('Hermione Granger');
            expect(sortData(testData, type)[10][0]).toEqual('Toke Chen');
        });

        it('should return data in alphabetical order, without empty string names', () => {
            const type = 'alphabeticalOrder';

            expect(sortData(testData, type)[0][0]).toEqual('Amy');
            expect(sortData(testData, type)[10][0]).toEqual('Yo Yo Chou');
        });


        it('should return data by lowest ranked', () => {
            const type = 'lowestRanked';

            expect(sortData(testData, type)[0][0]).toEqual('Toke Chen');
            expect(sortData(testData, type)[10][0]).toEqual('Hermione Granger');
        });

        it('should return data by lowest ranked, and sorted by alphebetical order for duplicate banana scores', () => {
            const type = 'lowestRanked';

            expect(sortData(testData, type)[1][0]).toEqual('Yo Yo Chou');
            expect(sortData(testData, type)[0][0]).toEqual('Toke Chen');
        });
    });

    describe('topTenData', () => {
        it('should return an array with the top 10, if searched name is in top 10', () => {
            const searchName = 'Bo';

            expect(topTenData(testData, searchName).length).toEqual(10);
            expect(topTenData(testData, searchName)[4][0]).toEqual(searchName);
        });
    })

    describe('addToLast', () => {
        it('should return an array with top 10 and searched name added to bottom, if searched name isnt in top 10', () => {
            const searchName = 'Toke Chen';
            const sortedArray = sortArray(testData);
            const topTen = topTenData(testData, searchName);

            expect(addToLast(searchName, testData, sortedArray, topTen)[9][0]).toEqual(searchName);
            expect(addToLast(searchName, testData, sortedArray, topTen).length).toEqual(10);
        });
    });

    describe('searchNames', () => {
        it('should return an array of names matching the entered text', () => {
            const searchedText = 'bo';
            const searchedText2 = 'BO';
            const expectedResult = ['Bob Burgers', 'Bo'];

            expect(searchNames(testData, searchedText)).toEqual(expectedResult);
            expect(searchNames(testData, searchedText2)).toEqual(expectedResult);
        });
    })
})