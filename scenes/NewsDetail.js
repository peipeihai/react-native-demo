import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { getNewsDetail } from '../models';
import { LoadingView } from '../components';
import HTML from 'react-native-render-html';

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
        <ScrollView style={{ flex: 1 }}>
            <HTML 
                html={htmlContent} 
                imagesMaxWidth={Dimensions.get('window').width} 
            />
        </ScrollView>
    );
}