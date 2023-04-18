import { Component } from 'react'


import './filter.scss'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onFilterInput(term)
    }

    render() {
        const { onFilterProduct, filterBtn } = this.props;    

        const buttonsData = [
            { name: 'bra', label: 'Brazil' },
            { name: 'ken', label: 'Kenya' },
            {name: 'col', label: 'Columbia'}
        ]
        
        const buttons = buttonsData.map(({ name, label }) => {
            let classBtn = 'filter__buttons__btn';

            if (filterBtn === name) {
                classBtn += ' active'
            }
            
            return (
                <button
                    className={classBtn}
                    type='button'
                    key={name}
                    name={name}
                    onClick={(e) => onFilterProduct(e)}>
                        {label}
                </button>
            )
        })

        return (
            <div className="filter">
                <div className="container">
                    <div className="filter__wrapper">
                        <div className="filter__search">
                            <div className="filter__search__label">Lookiing for</div>
                            <input type="text"
                                placeholder='start typing here...'
                                onChange={this.onUpdateSearch}
                                value={this.state.term}/>
                        </div>
                        <div className="filter__buttons">
                            <div className="filter__buttons__label">Or filter</div>
                            <div className="filter__buttons__wrapper">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;