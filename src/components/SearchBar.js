import {React, Component} from "react";

class SearchBar extends Component {
    state = {term: ''};

    onFormSubmit = e => {
        const {onSubmit} = this.props;
        const {term} = this.state;
        e.preventDefault();
        onSubmit(term);
    }

    render() {
        const {term} = this.state;
        const placeholder = 'type a search term to find an image';
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={term} onChange={(e) => this.setState({ term : e.target.value}) } placeholder={placeholder}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;