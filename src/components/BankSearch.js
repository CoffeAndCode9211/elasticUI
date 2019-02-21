import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { BankService } from '../services/BankService'
const bankService = new BankService();

class BankSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedValue: '',
      lstBank: [],
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleSelectChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  handleOnChange(event) {

    const key = this.state.selectedValue;
    const text = event.target.value;
    this.setState({ value: text });
    bankService
      .getBankDetail(key, text)
      .then(data => {
        this.setState({ lstBank: data });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { selectedValue } = this.state;
    return (
      <div>
        <label>
          Search By:
        <select value={this.state.selectedValue} onChange={this.handleSelectChange} >
            <option value="firstname">First Name</option>
            <option value="lastname">Last Name</option>
            <option value="address">Address</option>
          </select>
        </label>

        <label>
          Text to Search:
        <Autocomplete
            items={this.state.lstBank}
            shouldItemRender={(item, value) => item[selectedValue].toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item[selectedValue]}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
              >
                {item[selectedValue]}
              </div>
            }
            value={this.state.value}
            onChange={this.handleOnChange}
            onSelect={value => this.setState({ value: value })}
          />
        </label>
      </div>
    );
  }
}

export { BankSearch };