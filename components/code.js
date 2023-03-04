import Highlight, { defaultProps } from 'prism-react-renderer';

export const Code = ({ children }) => {
  const code = children.props.children;

  return (
    <Highlight {...defaultProps} code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
