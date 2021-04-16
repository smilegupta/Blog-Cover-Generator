import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";

class CoverImage extends React.Component {
	render() {
		const {
			title,
			bgColor,
			borderSize,
			pattern,
			textColor,
		} = this.props;

		return (
			<div>
				<div className={` cover ${pattern} `} style={{ backgroundColor: bgColor, color: textColor, fontSize: `${borderSize}px` }}>
					<div className="row h-100">
						<div className="col-sm-12 my-auto">
							<p className="text-left">{title}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CoverImage;
