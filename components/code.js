import Highlight, { defaultProps } from 'prism-react-renderer';
import themeLight from 'prism-react-renderer/themes/vsLight'
import themeDark from 'prism-react-renderer/themes/vsDark'
import { Box, useColorModeValue } from '@chakra-ui/react';

export const Code = ({ children }) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "");
  const theme = useColorModeValue(themeLight,themeDark);
  
  return (
    <Box 
      bg={useColorModeValue("#ffffff","#1e1e1e")} 
      pl={5}
      pr={5} 
      pt={2} 
      pb={2} 
      m={5}
      borderRadius={10}
    >
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
    </Box>
  );
};
