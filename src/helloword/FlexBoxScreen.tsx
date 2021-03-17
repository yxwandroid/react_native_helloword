import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

/**
 * 参考
 * https://eddychang.me/flex-react-native
 * 学习 react-native 的布局样式
 */
export default class FlexBoxScreen extends Component {
    static navigationOptions = {title: null};

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (<View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                width: "100%",
                height:100,
                alignItems: "center",
                backgroundColor: "blue",
            }}>
                <Text style={{flex: 10, backgroundColor: "red"}}>hello</Text>
                <Text style={{flex: 1}}>hello</Text>
            </View>

            {/*<Text style={styles.textStyle}>1</Text>*/}
            {/*<Text style={styles.item_flex_end}>1</Text>*/}
            {/*<Text style={styles.textStyle}>2</Text>*/}
            {/*<Text style={styles.textStyle2}>3</Text>*/}
            {/*<Text style={styles.textStyle}>4</Text>*/}
            {/*<Text style={styles.textStyle3}>5</Text>*/}
            {/*<Text style={styles.textStyle}>6</Text>*/}
            {/*<Text style={styles.textStyle}>7</Text>*/}
            {/*<Text style={styles.textStyle3}>8</Text>*/}
            {/*<Text style={styles.textStyle2}>9</Text>*/}
            {/*<Text style={styles.textStyle}>10</Text>*/}
            {/*<Text style={styles.textStyle}>11</Text>*/}
        </View>);
    }
}


/**
 * flexDirection 属性 设置主轴方向
 * row  横向排列
 * column 纵向排列
 * row-reverse  横向倒序排列
 * column-reverse 纵向倒序排列
 */

/**
 * flexWrap属性 设置内容是否换行
 *
 * wrap 超长部分换行
 * nowrap 超长部分不换行显示
 * wrap-reverse 超长部分倒序换行显示
 *
 */


/**
 * alignItems 设置元素的对齐方式
 *
 * flex-start  顶部对齐
 * flex-end    底部对齐
 * center   中心对齐
 * stretch   延展填满容器
 *
 * baseline  还没明白
 */


/**
 * justifyContent 设置整体对齐方式
 *
 * space-between 和space-around 区别
 * space-between 左右两侧没边距
 * space-around 左右两边有边距
 */


/**
 * alignSelf 设置自身相对父容器的位置
 */


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        flex: 1,
        marginLeft: 5,
        textAlign: "center",
        padding: 10,
        backgroundColor: 'red'
    },

    textStyle2: {
        alignSelf: "center",
        marginLeft: 1,
        width: 80,
        height: 80,
        textAlign: "center",
        backgroundColor: 'red'
    },
    textStyle3: {
        marginLeft: 10,
        width: 100,
        height: 100,
        textAlign: "center",
        padding: 20,
        backgroundColor: 'red'
    },
    item_flex_end: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 300,
        alignSelf: "flex-end",
    }
});
