
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories-b.calories);
    // fruits.sort((a, b) => b.calories-a.calories);
    //const lowCalFruits= fruits.filter(fruit=> fruit.calories < 100);
    //const highCalFruits= fruits.filter(fruit=> fruit.calories > 100);

import PropTypes from 'prop-types';
function List(props){

    const itemlist=props.items;
    const category=props.category;
    const listitems = itemlist.map(item => ( 
                                            <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>
                                            ));
                                        
return(
<>
<h3 className="listc">{category}</h3>
<ol className="listi">{listitems}</ol>
</>);
}

List.PropTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps={
    category: "Category",
    items: []
}
export default List;