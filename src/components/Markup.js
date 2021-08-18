import marked from 'marked';
import React from 'react';
import { connect } from 'react-redux';
import '../styling/Markup.css';

marked.setOptions({
  breaks: true,
  sanitize: true,
});

function Markup(props) {
  const body = marked(props.markup);
  return (
    <div id="preview" className="Markup col-12 col-lg-6" 
    dangerouslySetInnerHTML={{__html: body}}>
    </div>
  )
}

const mapStateToProps = (state) => ({
  markup: state.markdown
});

export default connect(mapStateToProps)(Markup);


