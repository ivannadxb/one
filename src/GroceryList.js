// 2-імпортуємо 
import { Component } from 'react';
import cart from './cart.png'
//1-створюємо та відразу експортуємо класовий компонент
export class GroceryList extends Component {
state = {
//6-займаємось state -сюди ми заклали дві характеристики, які будуть змінюватись
// у нас змінюється текст, за це відповідає input
userInput:'',
// 7-ми повинні додавати все, що змінюється в тексті у список покупок
// 8-створюємо ще один елемент, у нас тут буде масив
groceryList: []

    }
//4-назва функуції onChangeEvent, а в дужках event-бо хочемо саме слідкувати
//5-за подіями по зміні тексту
onChangeEvent(e){
// 12- пишемо this.setState, щоб відобразити зміну стану
// 13- userInput дорівнює- івенту e, таким чином ми дізнаємось, що пише користувач
// e - це зміна чогось, наприклад тексту
// через this.setState ми змінюємо userInput, кожен раз коли змінюється e.target.value
this.setState({userInput: e});
}

addItem(input){
    if (input === ''){
        alert ("Please enter an item")
    } else {
    // пишемо змiнну, куди будуть додаватись усi нашi справи
let listArray = this.state.groceryList;
listArray.push(input);
this.setState({groceryList: listArray, userInput: '' })
}}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

// як тільки в li буде зміна ми це все відслідковуємо
crossedWord(event) {
    const li = event.target;
    // toggle - додає або видаляє клас (закреслює і забирає закреслення)
    li.classList.toggle('crossed')
}

onFormSubmit(e){
    e.preventDefault();
}

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div class="container">
{/* створюємо input, але ми його не побачимо, бо спочатку компонент GroceryList */}
{/* треба додати в App.js  */}

<input type="text"
placeholder="I have to buy..."
//3-onChange - нам треба, щоб відслідковувати які зміни в input
// 11-тут прописуємо, як ми хочемо реагувати на зміни
// e.target.value - це означає те що пише користувач
onChange={(e) => {this.onChangeEvent(e.target.value)}}
// 9- додаэмо ще одну характеристику value- те чому дорівнює, те що пише користувач на даний момент - тобто значення*/
// 10-щоб дізнатись чому дорівнює input, в даний конкретний момент
// треба прописати this.state.userInput - таким чином ми отримали доступ до того, що написав користувач
// і у нас це йде зі стану state(те, що зверху)
value={this.state.userInput}/>
            </div>
            <div class="container">
{/* addItem - новий метод - при кожному кліку додаєновий  елемент */}
            <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
            </div>
            <ul>
{/* якщо у нас масив і ми використовуэмо метод map, тоді проблема
react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
- буде у нас завжди, тому просто дописуємо слово index */}
            {this.state.groceryList.map((item, index) => (
// ось тут ми пишемо прямо в li - key={index}
            <li onClick={this.crossedWord} key={index}>
                <img src={cart} width="40px"  alt="check"/>
                {item}</li>
                ))}
            </ul>
            <div class="container">
            <button onClick={() => this.deleteItem()}className="delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}
