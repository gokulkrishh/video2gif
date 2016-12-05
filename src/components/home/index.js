import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	convertToGIF() {
		console.log("came");
	}
	
	render() {
		return (
			<div class={style.home} onClick={this.convertToGIF}>
				<h1>Drag and Drop or Select a video</h1>
			</div>
		);
	}
}
