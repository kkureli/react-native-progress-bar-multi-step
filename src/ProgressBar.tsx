/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { ProgressiveBarProps } from './typings';

const ProgressBar: FC<ProgressiveBarProps> = ({
  page = 1,
  setPage,
  tabs,
  progressive = true,
  finishedBackgroundColor = 'rgb(57,202,116)',
  inProgressBackgroundColor = 'rgb(58,153,216)',
  circleStyle,
  stepNumberStyle,
  stepTitleStyle,
  lineStyle,
  titleProps,
  containerStyle,
}) => {
  const progressStyle = StyleSheet.flatten([
    {
      containerStyle: {
        width: containerStyle?.width
          ? containerStyle.width
          : styles.container.width,
        height: containerStyle?.height
          ? containerStyle.height
          : styles.container.height,
        marginTop: containerStyle?.marginTop
          ? containerStyle.marginTop
          : styles.container.marginTop,
      },
      circle: {
        width: circleStyle?.width ? circleStyle.width : styles.circle.width,
        height: circleStyle?.height ? circleStyle.height : styles.circle.height,
      },
      stepNumber: {
        fontSize: stepNumberStyle?.fontSize
          ? stepNumberStyle.fontSize
          : styles.stepNoText.fontSize,
        fontWeight: stepNumberStyle?.fontWeight
          ? stepNumberStyle.fontWeight
          : styles.stepNoText.fontWeight,
        color: stepNumberStyle?.color
          ? stepNumberStyle.color
          : styles.stepNoText.color,
      },
      stepTitleStyle: {
        fontSize: stepTitleStyle?.fontSize && stepTitleStyle.fontSize,
        fontWeight: stepTitleStyle?.fontWeight
          ? stepTitleStyle.fontWeight
          : 'bold',
      },
      lineStyle: {
        width: lineStyle?.width ? lineStyle.width : styles.line.width,
        height: lineStyle?.height ? lineStyle.height : styles.line.height,
        marginHorizontal: lineStyle?.marginHorizontal
          ? lineStyle.marginHorizontal
          : 10,
      },
    },
  ]);

  return (
    <View
      style={[
        progressStyle.containerStyle,
        {
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      {tabs.map((e, i) => {
        const statusIsFinished = {
          circle: progressive ? page > e.pageNo : page === e.pageNo,
          line: progressive ? page > e.pageNo : false,
        };
        return (
          <>
            {/* step circle */}
            <TouchableOpacity
              key={e.pageNo.toString()}
              onPress={() =>
                e?.onPress
                  ? e.onPress(e.pageNo)
                  : setPage
                  ? setPage(e.pageNo)
                  : null
              }
              style={[styles.label]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={[
                    progressStyle.circle,
                    {
                      backgroundColor: statusIsFinished.circle
                        ? finishedBackgroundColor
                        : inProgressBackgroundColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                    },
                  ]}
                >
                  <Text style={progressStyle.stepNumber}>{i + 1}</Text>
                </View>
              </View>

              {/* title */}
              <View style={styles.label}>
                <Text
                  {...titleProps}
                  style={[
                    progressStyle.stepTitleStyle,
                    {
                      color: statusIsFinished.circle
                        ? finishedBackgroundColor
                        : inProgressBackgroundColor,
                      textAlign: 'center',
                    },
                  ]}
                >
                  {e.title}
                </Text>
              </View>
            </TouchableOpacity>

            {/* line */}
            {i + 1 !== tabs.length && (
              <View
                style={[
                  progressStyle.lineStyle,
                  {
                    backgroundColor: statusIsFinished.line
                      ? finishedBackgroundColor
                      : inProgressBackgroundColor,
                  },
                ]}
              />
            )}
          </>
        );
      })}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 10,

    alignSelf: 'center',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 56,
    height: 56,
  },
  stepNoText: { color: 'white', fontWeight: 'bold', fontSize: 22 },
  label: { justifyContent: 'center' },
  line: {
    height: 3,
    width: 60,
    marginHorizontal: 10,
  },
});
