import { Component } from 'react';

import Header from '../header/header';
import Body from '../body/body'
import Footer from '../footer/footer';

import 'normalize.css';
import "@fontsource/merienda";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productDB: [
        { name: 'Solimo Coffee Beans', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '10.73$', size: '2 kg', country: 'Brazil', img: 'https://files.fm/thumb_show.php?i=fb8dn6qhv', best: true, id: 1 },
        { name: 'Presto Coffee Beans', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '15.99$', size: '1 kg', country: 'Kenya', img: 'https://files.fm/thumb_show.php?i=a4qzpxpqj', best: true, id: 2 },
        { name: 'AROMISTICO Coffee', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '6.99$', size: '1 kg', country: 'Columbia', img: 'https://files.fm/thumb_show.php?i=jw5rw8sy7', best: true, id: 3 },
        { name: 'Solimo Coffee', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '10.73$', size: '3 kg', country: 'Brazil', img: 'https://files.fm/thumb_show.php?i=fb8dn6qhv', best: false, id: 4 },
        { name: 'Presto Coffee', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '15.99$', size: '2 kg', country: 'Kenya', img: 'https://files.fm/thumb_show.php?i=a4qzpxpqj', best: false, id: 5 },
        { name: 'AROMISTICO Coffee', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloremque eum? Eaque adipisci ipsam quasi consequatur magnam, laudantium et necessitatibus ipsa excepturi sed nam, non veritatis nihil aliquid minima repellendus.', price: '6.99$', size: '2 kg', country: 'Columbia', img: 'https://files.fm/thumb_show.php?i=jw5rw8sy7', best: false, id: 6 }
      ],
      mainPage: 'Our coffee', // 'Our coffee', 'For your pleasure', 'CoffeeProduct'
      coffeeProduct: {},
      filterBtn: 'all',  // 'bra', 'ken', 'col'
      term: ''
    }
  }

  editMainPage = (page) => {
    const pageInfo = page.target.outerText
    if (pageInfo === 'Coffee house') {
      this.setState({
        mainPage: 'Coffee house',
        term: ''
      })
    } else if (pageInfo === 'Our coffee') {
      this.setState({
        mainPage: 'Our coffee'
      })
    } else if (pageInfo === 'For your pleasure') {
      this.setState({
        mainPage: 'For your pleasure',
        term: ''
      })
    }
  }

  onFilterProduct = (infoBtn) => {
    if (infoBtn.target.name === this.state.filterBtn) {
      this.setState({
        filterBtn: 'all'
      })
    } else {
      this.setState({
        filterBtn: infoBtn.target.name
      })
    }
  }

  onOpenProduct = (infoProd) => {
    console.log(infoProd)
    const clickElemId = infoProd.target.parentElement.parentElement.id,
          clickInfo = this.state.productDB.filter(item => item.id === +clickElemId);

    this.setState({
  
      mainPage: 'CoffeeProduct',
      coffeeProduct: clickInfo[0],
      term: ''
     
    })
  }

  onFilterInput = (term) => {
   this.setState({term}) 
  }
 
  render() {

    return (
      <div className="App">
        <Header mainPage={this.state.mainPage}
                editMainPage={this.editMainPage} />
        <Body productDB={this.state.productDB}
          mainPage={this.state.mainPage}
          coffeeProduct={this.state.coffeeProduct}
          onFilterProduct={this.onFilterProduct}
          onOpenProduct={this.onOpenProduct}
          filterBtn={this.state.filterBtn}
          onFilterInput={this.onFilterInput}
          term={this.state.term} />
        <Footer editMainPage={this.editMainPage} />
      </div>
    );
  }
}

export default App;
