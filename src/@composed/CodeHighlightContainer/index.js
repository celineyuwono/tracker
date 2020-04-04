import classnames from 'classnames';
import * as React from 'react';

import UikCodeHighlight from '../CodeHighlight';
import { Tabs, TabItem } from '@duik/it';

import cls from './content-code.module.scss';

// type CodeHighlightContainerProps = {
//   className?: ?String,
//   Component?: React.ElementType,
//   data: Object,
//   defaultActiveLang?: String,
//   maxHeight?: Boolean,
// }

export class CodeHighlightContainer extends React.PureComponent {
  static defaultProps = {
    className: null,
    defaultActiveLang: null,
    maxHeight: false
  };

  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      activeLang:
        props.defaultActiveLang ||
        (props.data && Object.keys(props.data)[0]) ||
        null
    };
  }

  setActiveLang = activeLang => () => {
    this.setState({
      activeLang
    });
  };

  render() {
    const {
      className,
      data,
      maxHeight,
      defaultActiveLang,
      ...rest
    } = this.props;

    const { activeLang } = this.state;
    const languages = Object.keys(data);

    return (
      <div
        className={classnames(cls['code-highlight-container'], className, {
          [cls['code-highlight-container-max-height']]: maxHeight
        })}
        {...rest}
      >
        {languages.length > 1 && (
          <Tabs sm className={cls['code-highlight-container-tabs']}>
            {languages.map(lang => (
              <TabItem
                key={lang}
                className={classnames(
                  cls['code-highlight-container-tab-item'],
                  {
                    active: lang === activeLang
                  }
                )}
                onClick={this.setActiveLang(lang)}
                text={lang}
              >
                {lang}
              </TabItem>
            ))}
          </Tabs>
        )}
        <div className={cls['code-highlight-container-content']}>
          <UikCodeHighlight
            key={activeLang}
            code={data[activeLang]}
            language={activeLang}
          >
            {data[activeLang]}
          </UikCodeHighlight>
        </div>
      </div>
    );
  }
}

export default CodeHighlightContainer;
