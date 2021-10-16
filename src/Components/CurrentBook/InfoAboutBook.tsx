import React from 'react'

interface BookInfo {
	bookInfo: any[]
	title: string
}

const InfoAboutBook = (props: BookInfo) => {
	return (
		<div style={{marginBottom: '10px'}}>
			{props.bookInfo &&
			<div>
				<div className={'subtitles'}>{props.title}</div>
				{props.bookInfo.join(' ')}
			</div>}
		</div>
	)
}

export default InfoAboutBook