import React from "react";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Items from "./components/Items";
import ItemForm from "./components/ItemForm";
import Comments from "./components/Comments";
import useLocalStorage from "use-local-storage";

function App() {
  const [items, setItems] = useLocalStorage("items", [
    { id: 1, title: 'Regular item', comments: [1, 2, 3, 4, 5] },
    { id: 2, title: 'Regular item', comments: [1, 2, 3, 4] },
    { id: 3, title: 'Regular item', comments: [1, 2, 3] },
    { id: 4, title: 'Regular item', comments: [1, 2] },
  ])

  const [comments, setComments] = useLocalStorage("comments", null)
  const [index, setIndex] = useLocalStorage("index", null)

  const createItem = (newItem) => {
    setItems([...items, newItem])
  }
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }
  const showComments = (item, index) => {
    setComments(item.comments)
    setIndex(index)
  }
  const createComment = (newComment,index) => {
    // items[index-1].comments.push(newComment)
    // setItems(items)
    setComments([...items[index-1].comments,newComment])
    console.log(items);
  }

  return (
    <div className="container-fluid" >
      <div className="row " >
        <div className="col-2 px-0" >
          <Navbar />
        </div>
        <div className="col-5">
          <div className="items_cotainer">
            <ItemForm create={createItem} />
            <Items items={items} remove={removeItem} showComments={showComments} />
          </div>
        </div>
        <div className="col-5">
          <Comments comments={comments} create={createComment} index={index} />
        </div>
      </div>
    </div>
  );
}

export default App;
