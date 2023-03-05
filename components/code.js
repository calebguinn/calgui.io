import Highlight, { defaultProps } from 'prism-react-renderer';
import themeLight from 'prism-react-renderer/themes/vsLight'
import themeDark from 'prism-react-renderer/themes/vsDark'
import { useColorModeValue } from '@chakra-ui/react';

export const Code = ({ children }) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "");
  const theme = useColorModeValue(themeLight,themeDark);
  
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
