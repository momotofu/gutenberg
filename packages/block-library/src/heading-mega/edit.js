/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import HeadingToolbar from '../heading/heading-toolbar';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
//import { PanelBody } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import {
	AlignmentToolbar,
	BlockControls,
	// InspectorControls,
	RichText,
	// __experimentalUseColors,
} from '@wordpress/block-editor';

function HeadingEdit( { attributes, className, mergeBlocks, onReplace, setAttributes } ) {
	const { align, content, level, placeholder } = attributes;
	const tagName = 'h' + level;

	return (
		<>
			<BlockControls>
				<HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				<AlignmentToolbar value={ align } onChange={ ( nextAlign ) => {
					setAttributes( { align: nextAlign } );
				} } />
			</BlockControls>
			<RichText
				identifier="content"
				tagName={ tagName }
				value={ content }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				onMerge={ mergeBlocks }
				onSplit={ ( value ) => {
					if ( ! value ) {
						return createBlock( 'core/paragraph' );
					}

					return createBlock( 'core/heading', {
						...attributes,
						content: value,
					} );
				} }
				onReplace={ onReplace }
				onRemove={ () => onReplace( [] ) }
				className={ classnames( className, {
					[ `has-text-align-${ align }` ]: align,
				} ) }
				placeholder={ placeholder || __( 'Write heading…' ) }
			/>
		</>
	);
}

export default HeadingEdit;
