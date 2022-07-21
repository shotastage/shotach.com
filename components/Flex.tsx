import { StylerProps } from './Styler';

export interface FlexProps extends StylerProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  colmun?: boolean;
  center?: boolean;
}

export const Flex = (props: FlexProps) => {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: props.flexDirection || 'row',
        alignItems: props.alignItems || 'center',
        justifyContent: props.justifyContent || 'space-around',
        marginTop: props.marginTop || 0,
        marginBottom: props.marginBottom || 0,
        marginRight: props.marginRight || 0,
        marginLeft: props.marginLeft || 0,
        backgroundColor: props.backgroundColor || '#fff',
      }}
    >
      {props.children}
    </div>
  );
};

export const Spacer = () => {
  return (
    <div
      style={{
        flex: 1,
        alignSelf: 'stretch',
      }}
    />
  );
};
