import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataSet, TableData } from '../types';
import { findName, tableData } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setDataArray, setError } from '../redux/actions';
import monkey from '../../assets/monkey.png';

interface ScoreCardProps {
  data: DataSet,
  searchName: string
}

export default function ScoreCard({ data, searchName }: ScoreCardProps) {
  
  const tableHeads: string[] = ['Name', 'Rank', 'Bananas'];
  const dispatch = useDispatch();
  const dataArray = useSelector((state: any) => state.userReducer.dataArray);
  const error = useSelector((state: any) => state.userReducer.error);

  useEffect(() => {
    if (!findName(searchName, data).length) {
      dispatch(setError(true));
    } else {
      dispatch(setDataArray(tableData(data, searchName)));
    }

    return () => {
      dispatch(setError(false))
    };
  }, [searchName, data, dispatch]);

  const renderTableHeader = () => {
    return (
      <View style={styles.tableRow}>
        {tableHeads.map((head, index) => (
          <View key={index} style={styles.tableHeaderCell}>
            <Text style={styles.headerText}>{head}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderTableRow = (rowData: TableData) => {
    let match: boolean;

    if (searchName) {
      if (rowData[0].toLowerCase() === searchName.toLowerCase()) {
        match = true;
      }
    }

    return (
      <View style={styles.tableRow}>
        {rowData.map((cellData, index) => (
          <View key={index} style={styles.tableCell}>
            <Text style={match && styles.textSelected}>{cellData}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {error ?
        <View style={styles.errorContainer}>
          <Text style={styles.errorMsg}>User not found, please search a different name</Text>
          <Image source={monkey} style={styles.img}/> 
        </View>:
        <View style={styles.table}>
          {renderTableHeader()}
          <FlatList
            data={dataArray}
            renderItem={({ item }) => renderTableRow(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: 300,
    marginBottom: 30,
    borderRadius: 20,
    borderWidth: .5,
  },
  table: {
    flex: 1
  },
  textSelected: {
    color: 'red'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
  errorMsg: {
    textAlign: 'center'
  },
  errorContainer: {
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
    height: 150,
    width: 150
  }
});