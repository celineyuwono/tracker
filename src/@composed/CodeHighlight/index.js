import * as React from 'react';
import prism from 'prismjs';
import classnames from 'classnames';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';

import './atom-dark.scss';
export class CodeHighlight extends React.Component {
  static defaultProps = {
    code: null,
    language: null
  };

  preRef = React.createRef();

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    if (this.preRef && this.preRef.current) {
      prism.highlightElement(this.preRef.current);
    }
  }

  render() {
    const { language, code, className, ...rest } = this.props;

    return (
      <pre
        ref={this.preRef}
        className={classnames('react-prism', `language-${language}`, className)}
        {...rest}
      >
        <code>{code}</code>
      </pre>
    );
  }
}

CodeHighlight.defaultProps = {
  className: null
};

export default CodeHighlight;
