import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { BookService } from '../services/BookService';

const bookService = new BookService();

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textBook: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);

  }


  handleOnChange(event) {

    const text = event.target.value;
    this.setState({ value: text });
    bookService
      .getBookDetail(text)
      .then(data => {
        this.setState({ textBook: data });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div>

        <form className="w3-container w3-card-4">
          <p>
            <h3 className="w3-text-blue">Elastic Search</h3>
            <Autocomplete
              items={this.state.textBook}
              shouldItemRender={(item, value) => item.text_entry.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={item => item.text_entry}
              inputProps={{ className: 'input-text w3-input w3-border' }}
              wrapperStyle={{ className: 'input-container' }}
              renderItem={(item, highlighted) =>
                <div
                  key={item.id}
                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                >
                  {item.text_entry}  <b> Score: </b>  {item.score}
                </div>
              }
              value={this.state.value}
              onChange={this.handleOnChange}
              onSelect={value => this.setState({ value: value })}
            />
          </p>

        </form>
      </div>
    );
  }
}

export { BookSearch };