import React from 'react';
import Autosuggest from 'react-autosuggest'; 
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

import './style.css';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(people, value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');
  
  return people.filter(person => regex.test(getSuggestionValue(person)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.first} ${suggestion.last}`;
}

function renderSuggestion( suggestion, { query }) {
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.twitter} onClick={suggestion.clicked}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index} >{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

export default class InputAutoSuggestion extends React.Component {
  constructor(props) {
    super(props);

    const { handlePersonInChargeProfleVisible } = this.props; 

    this.state = {
      value: '',
      suggestions: [],
      people: [
        {
          first: 'Charlie',
          last: 'Brown',
          twitter: 'dancounsell',
          clicked: handlePersonInChargeProfleVisible,
        },
        {
          first: 'Charlotte',
          last: 'White',
          twitter: 'mtnmissy',
          clicked: handlePersonInChargeProfleVisible,
          
        },
        {
          first: 'Chloe',
          last: 'Jones',
          twitter: 'ladylexy',
          clicked: handlePersonInChargeProfleVisible,
        },
        {
          first: 'Cooper',
          last: 'King',
          twitter: 'steveodom',
          clicked: handlePersonInChargeProfleVisible,
        }
      ],
    };    
  }

  onChange = (event, { newValue, method }) => {
  
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {

    const { people } = this.state;
    this.setState({
      suggestions: getSuggestions(people, value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
       
    const inputProps = {
      placeholder: "Siapa yang ingin anda temui ?",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        />
    );
  }
}

