import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundImage:
					"linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url('https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png')"
			}}
		>
			<div class="container">
				<h1>
					"Good painting is like good cooking; it can be tasted, but not
					explained."
				</h1>
				<span class="author"> - Johny - </span>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
