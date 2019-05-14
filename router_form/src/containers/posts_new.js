import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        {field.value}
        <input
          className="form-control"
          // onChange={field.input.onChange}
          {...field.input}
          type="text"
        />
      </div>
    )
  }

  render() {
    return (
      <form action="">
        <Field label="Title" name="title" component={this.renderField}/>
        <Field label="Tags" name="tags" component={this.renderField}/>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
