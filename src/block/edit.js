/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PlainText } from '@wordpress/editor';
import { SandBox } from '@wordpress/components';

/**
 * Third party dependencies
 */
import marked from 'marked';

export default function MarkdownEdit( { attributes, setAttributes, className, isSelected } ) {
	if ( isSelected ) {
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

	return <SandBox html={ marked( attributes.content || '' ) } />;
}
