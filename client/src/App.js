import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Post from './components/post/Post'
import CreatePost from './components/post/create-post/CreatePost';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/posts' component={Post} />
          <Route path='/posts/:id' component={Post} />
          <Route path='/create-post' component={CreatePost} />
          <Redirect to='/posts' />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
