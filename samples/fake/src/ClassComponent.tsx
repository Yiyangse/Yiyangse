import { Component } from 'react';

export type ClassComponentsProps = {
  href: string;
  text: string;
};

export default class ClassComponents extends Component<ClassComponentsProps> {
  render() {
    const { href, text } = this.props;
    console.log(href, text);
    return (
      <li>
        <a href='http://google.com'>
          <p>go to google</p>
        </a>
      </li>
    );
  }
}
