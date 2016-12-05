import { h, Component } from 'preact';
import style from './style';
import ffmpegEncoder from '../../lib/ffmpeg.js';

export default class Home extends Component {
	constructor() {
		super();
		this.ffmpeg = new ffmpegEncoder();
	}

	convertToGIF() {
		console.log("came");
	}
	
	render() {
		return (
			<div class={style.home} onClick={this.convertToGIF}>
			  <input type="file" name="file" id="file" accept="video/*" />
				<label for="file">Drag and Drop or Click to select a video</label>
			</div>
		);
	}
}
