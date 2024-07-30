import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from '../data/learn';

console.log(learnData);

function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding />
      <ConditionalRendering />
      <ConditionalDisplay />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
