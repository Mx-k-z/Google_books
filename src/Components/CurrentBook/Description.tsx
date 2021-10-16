import React from 'react'

interface DecriptionBook {
	bookInfo: string
	title: string
}

const Description = (props: DecriptionBook) => {
	return (
		<>
			<div>
				{props.bookInfo &&
				<div>
					<div className={'subtitles'}>{props.title}</div>
					{props.bookInfo}
				</div>}
			</div>
		</>
	)
}

export default Description