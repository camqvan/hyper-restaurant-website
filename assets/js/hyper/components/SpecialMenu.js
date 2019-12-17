import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	var loopMenu = function() {
		return state.specialMenuData.map(function(item) {
			return (
				<div class="col-md-4">
					<div class="box">
						<div
							class="box-img"
							style={{
								backgroundImage:
									'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url(' +
									item.img +
									')'
							}}
						>
							<div class="price-circle">{item.price}</div>
						</div>
						<span class="title">{item.title}</span>
						<p class="details">{item.description}</p>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="SpecialMenu" class="texturebg">
			<div class="container">
				<h5 class="comp-title">Special Menu</h5>
				<h2>Delicious Flavor of Autumn</h2>
				<div class="row boxes">{loopMenu()}</div>
				<a href="#" class="link">
					View Full Menu
				</a>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
