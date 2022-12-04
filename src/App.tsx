import { Component, Show } from 'solid-js';
import { Routes, Route, useMatch, A } from '@solidjs/router';

const paths = {
  tags: '/tags/:tagId/:entryId',
  categories: '/categories/:categoryId/:entryId?',
};

const App: Component = () => {
  return (
    <div>
      <p>
        <TagNavItem />
        <br />
        <CategoryNavItem />
      </p>
      <Routes>
        <Route path={paths.tags} component={Tags} />
        <Route path={paths.categories} component={Categories} />
      </Routes>
    </div>
  );
};

export default App;

function TagNavItem() {
  const match = useMatch(() => paths.tags);
  return (
    <A href="/tags/1/2">
      /tags/1/2 <Show when={match()}>*</Show>
    </A>
  );
}

function CategoryNavItem() {
  const match = useMatch(() => paths.categories);
  return (
    <A href="/categories/1">
      /categories/1 <Show when={match()}>*</Show>
    </A>
  );
}

function Tags() {
  return <h1>Tags</h1>;
}

function Categories() {
  return <h1>Categories</h1>;
}
