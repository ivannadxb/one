
import './App.css';
// 1-імпортуємо картинки
import image from './shopping.webp';
import imageTwo from './man.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
//5-прописуємо інший компонент і переходимо в app.css
    <div className='app'>
      <div className="container">
{/*2- прописуємо першу картинку тут */}
<img src={ image } width="200px" alt="shopping"/>
</div>
{/* 3-прописуємо заголовок */}
<div className="container">
<h1> Grocery List</h1>
</div>
{/*5-додаємо компонент GroceryList сюди, щоб він відобразився і імпортуємо */}
<GroceryList/>
{/*4- прописуємо другу картинку тут і створюємо новий компонент GroceryList */}
<div className="container">
<img src = { imageTwo} width="200px" alt="shopping man"/>
    </div>
    </div>
  );
}

export default App;
