/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PlainText } from '@wordpress/editor';

export default function MarkdownEdit( { attributes, setAttributes, className } ) {
	return (
		<div className={ className }>
			<PlainText
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Write markdown…' ) }
				aria-label={ __( 'Markdown' ) }
			/>
		</div>
	);
}
