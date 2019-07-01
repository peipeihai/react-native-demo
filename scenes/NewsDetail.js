import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getNewsDetail } from '../models';
import { LoadingView } from '../components';

export function NewsDetail({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState({});

    useEffect(() => {
        loadNewsDetail();
    }, []);

    loadNewsDetail = async () => {
        try {
            setLoading(true);
            const newsId = navigation.getParam('id');
            const newsDetail = await getNewsDetail({ newsId });
            setNews(newsDetail);
        } catch (err) {
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingView />;
    }

    const { data = {} } = news;
    const htmlContent = data.content;

    return (
        <View>
            <Text>{JSON.stringify(news)}</Text>
        </View>
    );
}

var styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100
    }
});