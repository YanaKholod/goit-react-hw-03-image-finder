import { Component } from 'react';
import { toast } from 'react-hot-toast';
import { BiSearch } from 'react-icons/bi';
import { Styled } from './StyleSearchBar';

export class SearchBar extends Component {
  state = {
    search: '',
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <Styled.SearchBar>
        <Styled.Form
          onSubmit={evt => {
            evt.preventDefault();

            if (!this.state.search) {
              return toast.error('Enter text for search.');
            }

            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
        >
          <Styled.Button type="submit">
            <BiSearch size="20" />
          </Styled.Button>

          <Styled.Input
            value={this.state.search}
            onChange={this.onChangeInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Styled.Form>
      </Styled.SearchBar>
    );
  }
}
