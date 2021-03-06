/* global alert */
/* global document */

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BoCharteEdit extends Component {
  state = {
    title: '',
    short_content: '',
    content: '',
  };

  componentDidMount() {
    this.getData();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    M.updateTextFields();
  }

  getData = async () => {
    const response = await axios.get('/api/articles/charte-short');
    this.setState({
      title: response.data[0].title,
      short_content: response.data[0].short_content,
      content: response.data[0].content,
    });
    // .then(('textarea').trigger('autoresize'));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const short_content = formData.get('short_content');
    const content = formData.get('content');
    const token = localStorage.getItem('token');
    await axios
      .put('/api/articles/charte-short', {
        title,
        short_content,
        content,
      },
      { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        if (response.status === 200) {
          alert('La modification est bien enregistré')
        } else {
          alert('Un problème est survenu lors de la modification')
        }
      })
      .then(window.location.reload());
  };

  render() {
    // déconstruction du state et alias du this.state
    const { title, short_content, content } = this.state;

    return (
      <div>
      
        <form onSubmit={this.editData}>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="title">
                Titre de la section
                <input
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="content">
                Accroche du manifeste
                <textarea
                  name="content"
                  id="content"
                  value={content}
                  onChange={this.handleChange}
                  className="materialize-textarea"
                  style={{ height: '150rem !important' }}
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="short_content">
                Titre
                <input
                  name="short_content"
                  id="short_content"
                  value={short_content}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn-floating btn-meddium tooltipped waves-effect waves-light"
            data-position="bottom"
            data-tooltip="Publier"
          >
            <i className="material-icons">check</i>
          </button>
        </form>
      </div>
    );
  }
}

export default BoCharteEdit;
