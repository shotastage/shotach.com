declare module '*.json' {
  type JSONType = {
    [key: string]: any;
  };

  const value: JSONType;
  export default value;
}
