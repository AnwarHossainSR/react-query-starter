import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home.page";
import Nav from "./components/Nav";
import RQSuperHeroPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/Superheroes.page";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroPage />}></Route>
        {/* <Route path='/rq-parallel'>
      <ParallelQueriesPage />
    </Route>
    <Route path='/rq-dynamic-parallel'>
      <DynamicParallelPage heroIds={[1, 3]} />
    </Route>
    <Route path='/rq-dependent'>
      <DependentQueriesPage email='vishwas@example.com' />
    </Route>
    <Route path='/rq-paginated'>
      <PaginatedQueriesPage />
    </Route>
    <Route path='/rq-infinite'>
      <InfiniteQueriesPage />
    </Route> */}
      </Routes>
    </>
  );
};

export default App;
