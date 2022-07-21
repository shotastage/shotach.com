import { Styler, StylerProps } from './Styler';

export interface BoxProps extends StylerProps {
  center?: boolean | false;
}

export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const { center, children, ...rest } = props;

  const styler = Styler(rest);

  const styles = center
    ? { display: 'flex', alignItems: 'center', justifyContent: 'center', ...styler }
    : { ...styler };

  return (
    <div
      style={{
        flexShrink: 1,
        flexGrow: 0,
        ...styles,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
