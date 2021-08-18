import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styling/Markdown.css';

export class Markdown extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      markdown: 
`# Header 
## Subheader
[google](www.google.com)
\`function foo = (bar) => return bar;\`
\`\`\`This
  is
  code
\`\`\`
1. Best markdown previewer!
> Made by professionals, for professionals
![A brown cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpetsnurturing.com%2Fwp-content%2Fuploads%2F2018%2F08%2FSpotted-cat-breeds-4.jpg&f=1&nofb=1)
**this is fun**`,
      submit: true
    };
  }
  componentDidMount () {
    this.props.translateMarkdown(this.state.markdown);
  }
  onChange = (e) => {
    this.setState(prevState => ({
      ...prevState,
      markdown: e.target.value
      }),
      () => !this.state.submit || this.props.translateMarkdown(this.state.markdown)
    );
  }
  render() {
    return (
      <div className="Markdown col-12 col-lg-6">
        <textarea onChange={this.onChange} 
        name="markdown" id="editor" cols="30" 
        rows="10" value={this.state.markdown}></textarea>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  translateMarkdown: (markdown) => dispatch({type: "TRANSLATE", markdown})
});

export default connect(null, mapDispatchToProps)(Markdown);
