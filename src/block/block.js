/**
 * BLOCK: iron-code-markdown
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { RawHTML } from '@wordpress/element';

/**
 * Third party dependencies
 */
import marked from 'marked';

/**
 * Internal dependencies
 */
import edit from './edit';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-iron-code-markdown', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'iron-code-markdown - CGB Block' ), // Block title.
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="translate(-71.09-24.1)"><path d="m10.509 2.01c-5.82 0-10.509 4.689-10.509 10.509v102.96c0 5.82 4.689 10.509 10.509 10.509h186.98c5.82 0 10.509-4.689 10.509-10.509v-102.96c0-5.82-4.689-10.509-10.509-10.509h-186.98m15.764 26.27h20.992l21.02 26.27 21.02-26.27h20.992v71.43h-20.992v-40.971l-21.02 26.27-21.02-26.27v40.971h-20.992v-71.43m120.8 0h20.992v36.756h21.02l-31.501 34.676-31.528-34.676h21.02v-36.756" fill="#4d4d4d" stroke="none" transform="matrix(.06731 0 0 .06731 72.08 27.814)"/></g></svg>, // Source: https://en.wikipedia.org/wiki/File:Antu_text-x-markdown.svg
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'iron-code-markdown — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		content: {
			type: 'string',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<RawHTML>
				{ marked( props.attributes.content ) }
			</RawHTML>
		);
	},
} );
