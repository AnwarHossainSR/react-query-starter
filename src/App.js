import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home.page";
import Nav from "./components/Nav";
import RQSuperHerosPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/Superheroes.page";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import RQSUperheroPage from "./components/RQSUperhero.page";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQSUperheroPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHerosPage />}></Route>
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
    </QueryClientProvider>
  );
};

export default App;
