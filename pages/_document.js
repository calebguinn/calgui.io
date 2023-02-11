import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'


export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
          <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicon/apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon" />
          <link href="/static/favicon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/static/favicon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        </Head>
        <body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}