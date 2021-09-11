interface Tab {
  title: any;
  pageNo: number;
  onPress?: Function;
}

interface ContainerStyle {
  width?: number;
  height?: number;
  marginTop?: number;
}

interface CircleStyle {
  width?: number;
  height?: number;
}

interface LineStyle {
  width?: number;
  height?: number;
  marginHorizontal?: number;
}

interface StepNumberStyle {
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  color?: string;
}
interface StepTitleStyle {
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

export interface ProgressiveBarProps {
  page: number;
  setPage?: Function;
  tabs: Tab[];
  progressive?: boolean;
  finishedBackgroundColor?: string;
  inProgressBackgroundColor?: string;
  circleStyle?: CircleStyle;
  stepNumberStyle?: StepNumberStyle;
  stepTitleStyle?: StepTitleStyle;
  lineStyle?: LineStyle;
  titleProps?: object;
  containerStyle?: ContainerStyle;
}
