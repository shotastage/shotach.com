export interface StylerProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number | '100%';
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  backgroundColor?: string | '#ffffff';
  color?: string;
  sx?: object;
}

export const CombinedStyler = (props: StylerProps, specified?: object) => {
  const style = Object.assign(
    {
      height: props.height,
      width: props.width,
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      margin: props.margin,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      padding: props.padding,
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
      paddingRight: props.paddingRight,
      backgroundColor: props.backgroundColor,
      color: props.color,
    },
    props.sx,
    specified,
  );

  return style;
};

export const cssCompute = (style: StylerProps) => Object.assign({}, style);

export const Styler = (props: StylerProps) => {
  return cssCompute(props);
};
