import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import { LoadingView } from '../components';
import { fetchNews } from '../models';

export function News(props) {

    const [loading, setLoading] = useState(false);
    const [fetchingMore, setFetcingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const [dataList, setDataList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData({ pageNumber });
    }, []);

    const loadData = async ({ pageNumber = 1, pageSize = 20, refreshing = false } = {}) => {
        try {
            if (refreshing) {
                setRefreshing(true);
            } else {
                if (pageNumber <= 1) {
                    setLoading(true);
                } else {
                    setFetcingMore(true);
                }
            }
            const { success, data = [] } = await fetchNews({ pageNumber, pageSize });
            if (success) {
                const newDataList = refreshing ? data : dataList.concat(data);
                setDataList(newDataList);
                setPageNumber(pageNumber);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            setRefreshing(false);
            setFetcingMore(false);
        }
    }

    if (loading) {
        return (
            <LoadingView />
        );
    }

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={dataList}
            renderItem={({ item }) => <NewsItem item={item} navigator={props.navigation} />}
            onEndReachedThreshold={0.3}
            onEndReached={({ distanceFromEnd }) => {
                loadData({ pageNumber: pageNumber + 1 });
            }}
            onRefresh={() => loadData({ pageNumber: 1, refreshing: true })}
            refreshing={refreshing}
            ListFooterComponent={!fetchingMore ? null : (
                <View style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="darkblue" />
                </View>
            )}
        />
    );
} 

const NewsItem = ({ item, navigator }) => {
    const { title, reply_count, visit_count, create_at, author = {} } = item;

    return (
        <TouchableHighlight 
            onPress={() => navigator.push('NewsDetail', {
                id: item.id,
            })}
        >
            <View style={styles.newsItemContainer}>
                <Image style={styles.avatar} source={{ uri: author.avatar_url }} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text> 
                    <View style={styles.statistics}>
                        <Text> 回复：{reply_count} </Text>
                        <Text> 浏览：{visit_count} </Text>
                    </View>
                    <View>
                        <Text> 发布时间：{create_at} </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    newsItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    contentContainer: {
        height: 64,
        marginLeft: 10,
        justifyContent: 'space-evenly',
    },
    title: {
        fontWeight: 'bold',
    },
    statistics: {
        flexDirection: 'row',
    },
});