/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { PlainText } from '@wordpress/editor';
import { SandBox } from '@wordpress/components';

/**
 * Third party dependencies
 */
import marked from 'marked';

class MarkdownEdit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isPreview: false,
		};

		this.switchToPreview = this.switchToPreview.bind( this );
		this.switchToMarkdown = this.switchToMarkdown.bind( this );
	}

	switchToPreview() {
		this.setState( { isPreview: true } );
	}

	switchToMarkdown() {
		this.setState( { isPreview: false } );
	}

	render() {
		const { attributes, setAttributes, className, isSelected } = this.props;
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
}

export default MarkdownEdit;
