import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import Counter from '../Counter/Counter'

const ItemListContainer = () =>{

    return(
        <section className="container ">
              <ItemList />
        </section>
    );

};

export default  ItemListContainer;