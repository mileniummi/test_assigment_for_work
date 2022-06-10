import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Layout from "./pages/Layout";
import Post from "./components/posts/Post";

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/posts/:id" element={<Post />} />
        <Route index element={<Posts />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
export default App;
